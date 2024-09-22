import { IntervalEnum, OrderBookAggregationEnum, Spot } from './../../src/index';

describe('SpotTradingSymbols', () => {
    const client = new Spot('', '');

    it('should return list information of trading pairs', async () => {
        const res = await client.spotTradingSymbols();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.symbols).toBeDefined();
        expect(res.data.symbols.length).toBeGreaterThan(1);
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
        expect(res.code).not.toBe(0);
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
        expect(res.code).not.toBe(0);
    });

    it('should return error', async () => {
        const res = await client.orderBook({ symbol: 'BTC-USDT', limit: 1001 });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });
});

describe('klineCandlestickData', () => {
    const client = new Spot('', '');

    it('should return list 500 klines', async () => {
        const res = await client.klineCandlestickData({ symbol: 'BTC-USDT', interval: IntervalEnum.DAY_1 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(500);
    });

    it('should return list 10 klines', async () => {
        const res = await client.klineCandlestickData({ symbol: 'BTC-USDT', interval: IntervalEnum.DAY_1, limit: 10 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(10);
    });

    it('should return list max 1000 klines', async () => {
        const res = await client.klineCandlestickData({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            limit: 10000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(1000);
    });

    it('should return data from startTime', async () => {
        const res = await client.klineCandlestickData({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            startTime: 1722268800000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[res.data.length - 1][0]).toBe(1722268800000);

        const res2 = await client.klineCandlestickData({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            startTime: 1722268800001
        });
        expect(res2).toBeDefined();
        expect(res2.data).toBeDefined();
        expect(res2.data[res2.data.length - 1][0]).toBe(1722355200000);
    });

    it('should return data till endTime', async () => {
        const res = await client.klineCandlestickData({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            endTime: 1722268800000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[0][0]).toBe(1722268800000);

        const res2 = await client.klineCandlestickData({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            endTime: 1722268799999
        });
        expect(res2).toBeDefined();
        expect(res2.data).toBeDefined();
        expect(res2.data[0][0]).toBe(1722182400000);
    });

    it('should return error', async () => {
        const res = await client.klineCandlestickData({ symbol: 'FAKE-SYMBOL', interval: IntervalEnum.DAY_1 });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });
});

describe('tickerPrice24hrChangeStatistics', () => {
    const client = new Spot('', '');

    it('should return list statistics of all pairs', async () => {
        const res = await client.tickerPrice24hrChangeStatistics();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBeGreaterThan(1);
    });

    it('should return statistics of BTC-USDT', async () => {
        const res = await client.tickerPrice24hrChangeStatistics({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(1);
        expect(res.data[0].symbol).toBe('BTC-USDT');
        expect(res.data[0].openPrice).toBeDefined();
        expect(res.data[0].highPrice).toBeDefined();
        expect(res.data[0].lowPrice).toBeDefined();
        expect(res.data[0].lastPrice).toBeDefined();
        expect(res.data[0].priceChange).toBeDefined();
        expect(res.data[0].priceChangePercent).toBeDefined();
        expect(res.data[0].volume).toBeDefined();
        expect(res.data[0].quoteVolume).toBeDefined();
        expect(res.data[0].openTime).toBeDefined();
        expect(res.data[0].closeTime).toBeDefined();
        expect(res.data[0].askPrice).toBeDefined();
        expect(res.data[0].askQty).toBeDefined();
        expect(res.data[0].bidPrice).toBeDefined();
        expect(res.data[0].bidQty).toBeDefined();
    });

    it('should return error', async () => {
        const res = await client.tickerPrice24hrChangeStatistics({ symbol: 'FAKE-SYMBOL' });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });
});

describe('orderBookAggregation', () => {
    const client = new Spot('', '');

    it('should return list statistics of all pairs', async () => {
        const res = await client.orderBookAggregation({
            symbol: 'BTC-USDT',
            depth: 100,
            type: OrderBookAggregationEnum.STEP_0
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.asks.length).toBe(20);
        expect(res.data.bids.length).toBe(20);
    });

    it('should return error', async () => {
        const res = await client.orderBookAggregation({
            symbol: 'FAKE-SYMBOL',
            depth: 100,
            type: OrderBookAggregationEnum.STEP_0
        });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });
});

describe('symbolPriceTicker', () => {
    const client = new Spot('', '');

    it('should return list tickers of all pairs', async () => {
        const res = await client.symbolPriceTicker();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBeGreaterThan(1);
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

describe('symbolOrderBookTicker', () => {
    const client = new Spot('', '');

    it('should return list tickers of all pairs', async () => {
        const res = await client.symbolOrderBookTicker();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBeGreaterThan(1);
    });

    it('should return book ticker of symbol', async () => {
        const res = await client.symbolOrderBookTicker({ symbol: 'BTC-USDT' });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[0]).toBeDefined();
        expect(res.data[0].symbol).toEqual('BTC-USDT');
        expect(res.data[0].bidPrice).toBeGreaterThan(0);
        expect(res.data[0].bidVolume).toBeGreaterThan(0);
        expect(res.data[0].askPrice).toBeGreaterThan(0);
        expect(res.data[0].askVolume).toBeGreaterThan(0);
    });
});

describe('historicalKline', () => {
    const client = new Spot('', '');

    it('should return list 500 klines', async () => {
        const res = await client.historicalKline({ symbol: 'BTC-USDT', interval: IntervalEnum.HOURS_1 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(500);
    });

    it('should return list 10 klines', async () => {
        const res = await client.historicalKline({ symbol: 'BTC-USDT', interval: IntervalEnum.HOURS_1, limit: 10 });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(10);
    });

    it('should return list max 1000 klines', async () => {
        const res = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.HOURS_1,
            limit: 1000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.length).toBe(1000);
    });

    it('should return data from startTime', async () => {
        const res = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            startTime: 1722268800000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[res.data.length - 1][0]).toBe(1722268800000);

        const res2 = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            startTime: 1722268800001
        });
        expect(res2).toBeDefined();
        expect(res2.data).toBeDefined();
        expect(res2.data[res2.data.length - 1][0]).toBe(1722355200000);
    });

    it('should return data till endTime', async () => {
        const res = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            endTime: 1722268800000
        });
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data[0][0]).toBe(1722268800000);

        const res2 = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.DAY_1,
            endTime: 1722268799999
        });
        expect(res2).toBeDefined();
        expect(res2.data).toBeDefined();
        expect(res2.data[0][0]).toBe(1722182400000);
    });

    it('should return error', async () => {
        const res = await client.historicalKline({ symbol: 'FAKE-SYMBOL', interval: IntervalEnum.DAY_1 });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });

    it('should return error limit should be less than or equal to 1000', async () => {
        const res = await client.historicalKline({
            symbol: 'BTC-USDT',
            interval: IntervalEnum.HOURS_1,
            limit: 1001
        });
        expect(res).toBeDefined();
        expect(res.code).not.toBe(0);
        expect(res.data).toBeUndefined();
    });
});

// describe('oldTradeLookup', () => {
//     const client = new Spot('', '');

//     it('should return list trades', async () => {
//         const res = await client.oldTradeLookup({ symbol: 'BTC-USDT' });
//         expect(res).toBeDefined();
//         expect(res.data).toBeDefined();
//         expect(res.data.length).toBe(500);
//         expect(res.data[0].tid).toBeDefined();
//         expect(res.data[0].t).toBeDefined();
//         expect(res.data[0].ms).toBeDefined();
//         expect(res.data[0].s).toBe('BTC-USDT');
//         expect(res.data[0].p).toBeGreaterThan(0);
//         expect(res.data[0].v).toBeGreaterThan(0);
//     });

//     it('should return limit number of trades', async () => {
//         const res = await client.oldTradeLookup({ symbol: 'BTC-USDT', limit: 10 });
//         expect(res).toBeDefined();
//         expect(res.data).toBeDefined();
//         expect(res.data.length).toBe(10);
//     });
// });
