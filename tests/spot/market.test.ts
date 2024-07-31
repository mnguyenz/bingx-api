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
