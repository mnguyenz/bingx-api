import { PlaceOrderParams, PlaceOrderResponse, QueryOrderHistoryParams, QueryOrderHistoryResponse } from '~types';

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
    queryOrderHistory(params?: QueryOrderHistoryParams): Promise<QueryOrderHistoryResponse>;
}
