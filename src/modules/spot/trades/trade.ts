import { Constructor } from "~types/base.type";
import { TradeMethods } from "./methods";
import { SPOT_PLACE_ORDER_URL } from "~constants/url.constant";
import { PlaceOrderParams, PlaceOrderResponse } from "~types";
import { HttpMethodEnum } from "~enums/common.enum";

export function mixinTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        async placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse> {
            const url = this.prepareSignedPath(SPOT_PLACE_ORDER_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return await this.makeRequest(HttpMethodEnum.POST, url);
        }
    }
}