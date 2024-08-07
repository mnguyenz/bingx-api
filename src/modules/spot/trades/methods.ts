import { SpotTradingSymbolsParams } from '../market/params.type';
import { PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, OrdersResponse, PlaceOrdersResponse } from './responses.type';

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    cancelAllOpenOrders(params?: SpotTradingSymbolsParams): Promise<PlaceOrdersResponse>;
    currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse>;
}
