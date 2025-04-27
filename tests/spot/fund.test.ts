import { env } from '~config/env.config';
import { AccountTypeEnum, Spot } from '~index';

describe('assetOverview', () => {
    const client = new Spot(env.BINGX_API_KEY, env.BINGX_API_SECRET);

    it('should return assets in fund account', async () => {
        const res = await client.queryAssets();
        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data.balances).toBeDefined();
    });

    it('should return usdt balance of each account', async () => {
        const accountTypes = Object.values(AccountTypeEnum);

        for (const type of accountTypes) {
            const res = await client.assetOverview({ accountType: type });
            expect(res).toBeDefined();
            expect(res.data).toBeDefined();
            expect([0, 1]).toContain(res.data.length);
            if (res.data.length === 1) {
                expect(res.data[0].accountType).toBe(type);
                expect(res.data[0].usdtBalance).toBeDefined();
            }
        }
    });
});
