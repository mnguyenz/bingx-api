import { TradeMethods } from './methods';
import { SPOT_PLACE_ORDER_URL, SPOT_QUERY_ORDER_HISTORY_URL } from '~constants/url.constant';
import { HttpMethodEnum } from '~enums/common.enum';
import { Constructor } from '~helpers/base.type';
import { PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, QueryOrderHistoryResponse } from './responses.type';

export function mixinTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        async placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse> {
            const url = this.prepareSignedPath(SPOT_PLACE_ORDER_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return await this.makeRequest(HttpMethodEnum.POST, url);
        }

        async queryOrderHistory(params?: QueryOrderHistoryParams): Promise<QueryOrderHistoryResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ORDER_HISTORY_URL, {
                ...params,
                symbol: params?.symbol?.toUpperCase()
            });
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            const parseResponse = {
                ...response,
                data: {
                    orders: response.data?.orders?.map((order) => {
                        // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
                        const { StopPrice, ...rest } = order;
                        return {
                            ...rest,
                            price: parseFloat(order.price),
                            stopPrice: parseFloat(StopPrice),
                            origQty: parseFloat(order.origQty),
                            executedQty: parseFloat(order.executedQty),
                            cummulativeQuoteQty: parseFloat(order.cummulativeQuoteQty),
                            origQuoteOrderQty: parseFloat(order.origQuoteOrderQty)
                        };
                    })
                }
            };
            return parseResponse;
        }
    };
}
