import { TradeMethods } from './methods';
import {
    SPOT_CANCEL_ALL_OPEN_ORDERS_URL,
    SPOT_CANCEL_ORDER_URL,
    SPOT_CURRENT_OPEN_ORDERS_URL,
    SPOT_PLACE_ORDER_URL,
    SPOT_QUERY_ORDER_DETAILS_URL,
    SPOT_QUERY_ORDER_HISTORY_URL,
    SPOT_QUERY_TRADING_COMMISSION_RATE_URL
} from '~constants/url.constant';
import { HttpMethodEnum } from '~enums/common.enum';
import { Constructor } from '~helpers/base.type';
import {
    CancelOrderParams,
    PlaceOrderParams,
    QueryOrderDetailsParams,
    QueryOrderHistoryParams,
    SymbolRequiredParams
} from './params.type';
import {
    PlaceOrderResponse,
    OrdersResponse,
    PlaceOrdersResponse,
    CancelOrderResponse,
    QueryOrderDetailsResponse,
    QueryTradingCommissionRateResponse
} from './responses.type';
import { SpotTradingSymbolsParams } from '../market/params.type';

export function mixinTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {
        async placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse> {
            const url = this.prepareSignedPath(SPOT_PLACE_ORDER_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.POST, url);
        }

        async cancelOrder(params: CancelOrderParams): Promise<CancelOrderResponse> {
            const url = this.prepareSignedPath(SPOT_CANCEL_ORDER_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.POST, url);
        }

        async cancelAllOpenOrders(params: SpotTradingSymbolsParams): Promise<PlaceOrdersResponse> {
            const url = this.prepareSignedPath(SPOT_CANCEL_ALL_OPEN_ORDERS_URL, {
                ...params,
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.POST, url);
        }

        async queryOrderDetails(params?: QueryOrderDetailsParams): Promise<QueryOrderDetailsResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ORDER_DETAILS_URL, { ...params });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse> {
            const url = this.prepareSignedPath(SPOT_CURRENT_OPEN_ORDERS_URL, {
                ...params,
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_ORDER_HISTORY_URL, {
                ...params,
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async queryTradingCommissionRate(params: SymbolRequiredParams): Promise<QueryTradingCommissionRateResponse> {
            const url = this.prepareSignedPath(SPOT_QUERY_TRADING_COMMISSION_RATE_URL, {
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }
    };
}
