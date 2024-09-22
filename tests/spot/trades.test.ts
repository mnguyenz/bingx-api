import { env } from '~config/env.config';
import { OrderSideEnum, OrderStatusEnum, OrderTypeEnum, Spot } from '../../src/index';

const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);
let orderId: bigint;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('placeOrder', () => {
    it('should place a order, hope I have enough fund USDT for the test', async () => {
        const spotTradingSymbols = await client.spotTradingSymbols({ symbol: 'BTC-USDT' });
        const minNotional = spotTradingSymbols.data.symbols[0].minNotional;
        const symbolPriceTicker = await client.symbolPriceTicker({ symbol: 'BTC-USDT' });
        const price = symbolPriceTicker.data[0].trades[0].price;
        const orderPrice = Math.round((price / 2) * 100) / 100;

        const res = await client.placeOrder({
            symbol: 'BTC-USDT',
            side: OrderSideEnum.BUY,
            type: OrderTypeEnum.LIMIT,
            price: orderPrice,
            quoteOrderQty: minNotional
        });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.symbol).toEqual('BTC-USDT');
        expect(res.data.orderId).toBeDefined();
        expect(res.data.price).toEqual(orderPrice);
        expect(res.data.type).toEqual(OrderTypeEnum.LIMIT);
        expect(res.data.side).toEqual(OrderSideEnum.BUY);

        orderId = res.data.orderId;
    });
});

describe('currentOpenOrders', () => {
    it('should return current open orders', async () => {
        const res = await client.currentOpenOrders({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.orders.length).toBeGreaterThanOrEqual(1);
        expect(res.data.orders[res.data.orders.length - 1].orderId).toBe(orderId);
        expect(res.data.orders[0].stopPrice).toBeDefined();
        expect((res.data.orders[0] as any).StopPrice).toBeUndefined();
    });
});

describe('cancelOrder', () => {
    it('should return error because no orderId or clientOrderID', async () => {
        const res = await client.cancelOrder({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });

    it('should return error because no order match symbol and orderId', async () => {
        const res = await client.cancelOrder({ symbol: 'ETH-USDT', orderId });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });

    it('should delay for 2 seconds', async () => {
        await sleep(2000);
    });

    it('should cancel the created order', async () => {
        const res = await client.cancelOrder({ symbol: 'BTC-USDT', orderId });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.symbol).toBe('BTC-USDT');
        expect(res.data.orderId).toBe(orderId);
    });
});

describe('cancelAllOpenOrders', () => {
    beforeAll(async () => {
        const spotTradingSymbols = await client.spotTradingSymbols({ symbol: 'BTC-USDT' });
        const minNotional = spotTradingSymbols.data.symbols[0].minNotional;
        const symbolPriceTicker = await client.symbolPriceTicker({ symbol: 'BTC-USDT' });
        const price = symbolPriceTicker.data[0].trades[0].price;
        const orderPrice = Math.round((price / 2) * 100) / 100;

        await client.placeOrder({
            symbol: 'BTC-USDT',
            side: OrderSideEnum.BUY,
            type: OrderTypeEnum.LIMIT,
            price: orderPrice,
            quoteOrderQty: minNotional
        });
    });

    it('should cancel all open orders', async () => {
        const res = await client.cancelAllOpenOrders();
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.orders.length).toBeGreaterThanOrEqual(1);

        const currentOpenOrders = await client.currentOpenOrders();
        expect(currentOpenOrders.data.orders.length).toBe(0);
    });
});

describe('queryOrderDetails', () => {
    it('should return order which just cancel', async () => {
        const res = await client.queryOrderDetails({ symbol: 'BTC-USDT', orderId });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.symbol).toBe('BTC-USDT');
        expect(res.data.orderId).toBe(orderId);
        expect(res.data.status).toBe(OrderStatusEnum.CANCELED);
        expect(res.data.stopPrice).toBeDefined();
        expect((res.data as any).StopPrice).toBeUndefined();
    });
});

describe('queryOrderHistory', () => {
    it('should return order which just cancel', async () => {
        const res = await client.queryOrderHistory({ symbol: 'BTC-USDT', status: OrderStatusEnum.FILLED });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.orders.length).toBeGreaterThanOrEqual(1);
        expect(res.data.orders[0].symbol).toBe('BTC-USDT');
        expect(res.data.orders[0].stopPrice).toBeDefined();
        expect((res.data.orders[0] as any).StopPrice).toBeUndefined();
    });
});

describe('queryTradingCommissionRate', () => {
    it('should return trading commission rate', async () => {
        const res = await client.queryTradingCommissionRate({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.takerCommissionRate).toBe(0.001);
        expect(res.data.makerCommissionRate).toBe(0.001);

        const fakeRes = await client.queryTradingCommissionRate({ symbol: 'FAKE-SYMBOL' });
        expect(fakeRes).toBeDefined();
        expect(fakeRes.code).toBe(0);
        expect(fakeRes.data).toBeDefined();
        expect(fakeRes.data.takerCommissionRate).toBe(0);
        expect(fakeRes.data.makerCommissionRate).toBe(0);
    });
});
