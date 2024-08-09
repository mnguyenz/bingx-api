import { SpotTradingSymbolsParams } from '../market/params.type';
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

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    cancelOrder(params: CancelOrderParams): Promise<CancelOrderResponse>;
    cancelAllOpenOrders(params?: SpotTradingSymbolsParams): Promise<PlaceOrdersResponse>;
    queryOrderDetails(params: QueryOrderDetailsParams): Promise<QueryOrderDetailsResponse>;
    currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse>;
    queryTradingCommissionRate(params: SymbolRequiredParams): Promise<QueryTradingCommissionRateResponse>;
}
