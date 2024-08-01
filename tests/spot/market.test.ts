import { Spot } from './../../src/index';

describe('SpotTradingSymbols', () => {
    const client = new Spot('', '');

    it('should return list information of trading pairs', async () => {
        const res = await client.spotTradingSymbols();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.symbols).toBeDefined();
        expect(res.data.symbols.length).toBeGreaterThanOrEqual(1);
    });

    it('should return information of symbol', async () => {
        const res = await client.spotTradingSymbols({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.symbols[0]).toBeDefined();
        expect(res.data.symbols[0].symbol).toEqual('BTC-USDT');
        expect(res.data.symbols[0].minNotional).toEqual(1);
    });
});

describe('recentTradesList', () => {
    const client = new Spot('', '');

    it('should return list 100 recent trades', async () => {
        const res = await client.recentTradesList({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(100);
    });

    it('should return list 10 recent trades', async () => {
        const res = await client.recentTradesList({ symbol: 'BTC-USDT', limit: 10 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(10);
    });

    it('should return error', async () => {
        const res = await client.recentTradesList({ symbol: 'FAKE-SYMBOL' });
        expect(res).toBeDefined();
        expect(res.code).toBe(100204);
        expect(res.data).toBeUndefined();
    });
});

describe('orderBook', () => {
    const client = new Spot('', '');

    it('should return list 20 order book', async () => {
        const res = await client.orderBook({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.bids.length).toBe(20);
        expect(res.data.asks.length).toBe(20);
        expect(res.data.bids[0][0]).toBeGreaterThan(0);
        expect(res.data.bids[0][1]).toBeGreaterThan(0);
        expect(res.data.asks[0][0]).toBeGreaterThan(0);
        expect(res.data.asks[0][1]).toBeGreaterThan(0);
    });

    it('should return list 10 recent trades', async () => {
        const res = await client.orderBook({ symbol: 'BTC-USDT', limit: 10 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.bids.length).toBe(10);
        expect(res.data.asks.length).toBe(10);
        expect(res.data.bids[0][0]).toBeGreaterThan(0);
        expect(res.data.bids[0][1]).toBeGreaterThan(0);
        expect(res.data.asks[0][0]).toBeGreaterThan(0);
        expect(res.data.asks[0][1]).toBeGreaterThan(0);
    });

    it('should return null data', async () => {
        const res = await client.orderBook({ symbol: 'FAKE-SYMBOL' });
        expect(res).toBeDefined();
        expect(res.data.bids.length).toBe(0);
        expect(res.data.asks.length).toBe(0);
    });

    it('should return error', async () => {
        const res = await client.orderBook({ symbol: 'BTC-USDT', limit: 1001 });
        expect(res).toBeDefined();
        expect(res.code).toBe(100400);
        expect(res.msg).toBe('limit should less than 1000');
        expect(res.data).toBeUndefined();
    });
});

describe('symbolPriceTicker', () => {
    const client = new Spot('', '');

    it('should return list tickers of all pairs', async () => {
        const res = await client.symbolPriceTicker();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBeGreaterThanOrEqual(1);
    });

    it('should return information of symbol', async () => {
        const res = await client.symbolPriceTicker({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[0]).toBeDefined();
        expect(res.data[0].symbol).toEqual('BTC_USDT');
        expect(res.data[0].trades[0].price).toBeDefined();
        expect(res.data[0].trades[0].volume).toBeDefined();
    });
});
