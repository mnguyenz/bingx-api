import { SpotTradingSymbolsParams } from '../market/params.type';
import { PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, OrdersResponse } from './responses.type';

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    currentOpenOrders(params?: SpotTradingSymbolsParams): Promise<OrdersResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<OrdersResponse>;
}
