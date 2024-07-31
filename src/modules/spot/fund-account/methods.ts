import { QueryAssetsResponse } from '~types';
import { AssetTransferRecordsResponse } from './responses.type';
import { AssetTransferRecordsParams } from './params.type';

export interface FundAccountMethods {
    queryAssets(): Promise<QueryAssetsResponse>;
    assetTransferRecords(assetTransferRecords: AssetTransferRecordsParams): Promise<AssetTransferRecordsResponse>;
}
