import { SpotTradingSymbolsParams } from '../market/params.type';
import { CancelOrderParams, PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, OrdersResponse, PlaceOrdersResponse, CancelOrderResponse } from './responses.type';

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    cancelOrder(params: CancelOrderParams): Promise<CancelOrderResponse>;
    cancelAllOpenOrders(params?: SpotTradingSymbolsParams): Promise<PlaceOrdersResponse>;
    currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse>;
}
