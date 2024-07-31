import { PlaceOrderParams, QueryOrderHistoryParams } from './params.type';
import { PlaceOrderResponse, QueryOrderHistoryResponse } from './responses.type';

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<QueryOrderHistoryResponse>;
}
