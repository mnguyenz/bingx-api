import { env } from '~config/env.config';
import { OrderSideEnum, OrderTypeEnum, Spot } from '../../src/index';

let orderId: bigint;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('placeOrder', () => {
    const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);

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
    const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);

    it('should return current open orders', async () => {
        const res = await client.currentOpenOrders({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.code).toBe(0);
        expect(res.data).toBeDefined();
        expect(res.data.orders.length).toBeGreaterThanOrEqual(1);
        expect(res.data.orders[res.data.orders.length - 1].orderId).toBe(orderId);
    });
});

describe('cancelOrder', () => {
    const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);

    it('should return error because no orderId or clientOrderID', async () => {
        const res = await client.cancelOrder({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.code).toBe(100400);
        expect(res.data).toBeUndefined();
    });

    it('should return error because no order match symbol and orderId', async () => {
        const res = await client.cancelOrder({ symbol: 'ETH-USDT', orderId });
        expect(res).toBeDefined();
        expect(res.code).toBe(100400);
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

// describe('cancelAllOpenOrders', () => {
//     const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);

//     it('should cancel all open orders', async () => {
//         const res = await client.cancelAllOpenOrders();
//         expect(res).toBeDefined();
//         expect(res.code).toBe(0);
//         expect(res.data).toBeDefined();
//         expect(res.data.orders.length).toBeGreaterThanOrEqual(1);

//         const currentOpenOrders = await client.currentOpenOrders();
//         expect(currentOpenOrders.data.orders.length).toBe(0);
//     });
// });
