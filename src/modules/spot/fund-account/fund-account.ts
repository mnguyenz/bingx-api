import { HttpMethodEnum } from '~enums/common.enum';
import { FundAccountMethods } from './methods';
import { SPOT_ASSET_TRANSFER_RECORDS_URL, SPOT_QUERY_ASSETS_URL } from '~constants/url.constant';
import { AssetTransferRecordsParams } from './params.type';
import { AssetTransferRecordsResponse, QueryAssetsResponse } from './responses.type';
import { Constructor } from '~helpers/base.type';

export function mixinFundAccount<T extends Constructor>(base: T): Constructor<FundAccountMethods> & T {
    return class extends base {
        async queryAssets(): Promise<QueryAssetsResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ASSETS_URL);
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            const parseResponse = {
                ...response,
                data: {
                    balances: response.data?.balances?.map((balance) => ({
                        asset: balance.asset,
                        free: parseFloat(balance.free),
                        locked: parseFloat(balance.locked)
                    }))
                }
            };
            return parseResponse;
        }

        async assetTransferRecords(
            assetTransferRecords: AssetTransferRecordsParams
        ): Promise<AssetTransferRecordsResponse> {
            const url = this.prepareSignedPath(SPOT_ASSET_TRANSFER_RECORDS_URL, assetTransferRecords);
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            const parseResponse = {
                ...response,
                rows: response?.rows?.map((row) => ({
                    ...row,
                    amount: parseFloat(row.amount)
                }))
            };
            return parseResponse;
        }
    };
}
