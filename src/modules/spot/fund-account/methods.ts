import { AssetTransferRecordsResponse, QueryAssetsResponse } from './responses.type';
import { AssetTransferRecordsParams } from './params.type';

export interface FundAccountMethods {
    queryAssets(): Promise<QueryAssetsResponse>;
    assetTransferRecords(assetTransferRecords: AssetTransferRecordsParams): Promise<AssetTransferRecordsResponse>;
}
