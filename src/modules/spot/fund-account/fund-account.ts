import { HttpMethodEnum } from '~enums/common.enum';
import { FundAccountMethods } from './methods';
import {
    SPOT_ASSET_OVERVIEW_URL,
    SPOT_ASSET_TRANSFER_RECORDS_URL,
    SPOT_QUERY_ASSETS_URL
} from '~constants/url.constant';
import { AssetOverviewParams, AssetTransferRecordsParams } from './params.type';
import { AssetOverviewResponse, AssetTransferRecordsResponse, QueryAssetsResponse } from './responses.type';
import { Constructor } from '~helpers/base.type';

export function mixinFundAccount<T extends Constructor>(base: T): Constructor<FundAccountMethods> & T {
    return class extends base {
        async queryAssets(): Promise<QueryAssetsResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ASSETS_URL);
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async assetTransferRecords(
            assetTransferRecords: AssetTransferRecordsParams
        ): Promise<AssetTransferRecordsResponse> {
            const url = this.prepareSignedPath(SPOT_ASSET_TRANSFER_RECORDS_URL, assetTransferRecords);
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async assetOverview(assetOverview: AssetOverviewParams): Promise<AssetOverviewResponse> {
            const url = this.prepareSignedPath(SPOT_ASSET_OVERVIEW_URL, assetOverview);
            return this.makeRequest(HttpMethodEnum.GET, url);
        }
    };
}
