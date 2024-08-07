import { TradeMethods } from './methods';
import {
    SPOT_CURRENT_OPEN_ORDERS_URL,
    SPOT_PLACE_ORDER_URL,
    SPOT_QUERY_ORDER_HISTORY_URL
} from '~constants/url.constant';
import { HttpMethodEnum } from '~enums/common.enum';
import { Constructor } from '~helpers/base.type';
import { PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, OrdersResponse } from './responses.type';
import { SpotTradingSymbolsParams } from '../market/params.type';

export function mixinTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        async placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse> {
            const url = this.prepareSignedPath(SPOT_PLACE_ORDER_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            const response = await this.makeRequest(HttpMethodEnum.POST, url);
            const parseResponse = {
                ...response,
                data: {
                    ...response.data,
                    price: parseFloat(response.data?.price),
                    stopPrice: parseFloat(response.data?.stopPrice),
                    origQty: parseFloat(response.data?.origQty),
                    executedQty: parseFloat(response.data?.executedQty),
                    cummulativeQuoteQty: parseFloat(response.data?.cummulativeQuoteQty)
                }
            };
            return parseResponse;
        }

        async currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse> {
            const url = this.prepareSignedPath(SPOT_CURRENT_OPEN_ORDERS_URL, {
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
                            price: parseFloat(order?.price),
                            stopPrice: parseFloat(StopPrice),
                            origQty: parseFloat(order?.origQty),
                            executedQty: parseFloat(order?.executedQty),
                            cummulativeQuoteQty: parseFloat(order?.cummulativeQuoteQty),
                            origQuoteOrderQty: parseFloat(order?.origQuoteOrderQty)
                        };
                    })
                }
            };
            return parseResponse;
        }

        async queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse> {
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
                            price: parseFloat(order?.price),
                            stopPrice: parseFloat(StopPrice),
                            origQty: parseFloat(order?.origQty),
                            executedQty: parseFloat(order?.executedQty),
                            cummulativeQuoteQty: parseFloat(order?.cummulativeQuoteQty),
                            origQuoteOrderQty: parseFloat(order?.origQuoteOrderQty)
                        };
                    })
                }
            };
            return parseResponse;
        }
    };
}
