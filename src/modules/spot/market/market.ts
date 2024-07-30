import { Constructor } from "~types/base.type";
import { HttpMethodEnum } from "~enums/common.enum";
import { MarketMethods } from "./methods";
import { SpotTradingSymbolsParams, SpotTradingSymbolsResponse } from "~types";
import { SPOT_TRADING_SYMBOLS } from "~constants/url.constant";

export function mixinMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        async spotTradingSymbols(params: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse> {
            const url = this.preparePath(SPOT_TRADING_SYMBOLS, {
                symbol: params?.symbol?.toUpperCase()
            });
            return await this.makeRequest(HttpMethodEnum.GET, url);
        }
    }
}