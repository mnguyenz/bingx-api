import { QueryAssetsResponse } from '~types';

export interface FundAccountMethods {
    queryAssets(): Promise<QueryAssetsResponse>;
}
