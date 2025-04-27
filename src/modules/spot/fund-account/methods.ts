import { AssetOverviewResponse, AssetTransferRecordsResponse, QueryAssetsResponse } from './responses.type';
import { AssetOverviewParams, AssetTransferRecordsParams } from './params.type';

export interface FundAccountMethods {
    queryAssets(): Promise<QueryAssetsResponse>;
    assetTransferRecords(assetTransferRecords: AssetTransferRecordsParams): Promise<AssetTransferRecordsResponse>;
    assetOverview(assetOverview: AssetOverviewParams): Promise<AssetOverviewResponse>;
}
