import { Constructor } from "~types/base.type";
import { HttpMethodEnum } from "~enums/common.enum";
import { FundAccountMethods } from "./methods";
import { QueryAssetsResponse, SingleQueryAssetResponse } from "~types";
import { SPOT_QUERY_ASSETS } from "~constants/url.constant";

export function mixinFundAccount<T extends Constructor>(base: T): Constructor<FundAccountMethods> & T {
    return class extends base {
        async queryAssets(): Promise<QueryAssetsResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ASSETS);
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            const parseResponse =  {
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
    }
}