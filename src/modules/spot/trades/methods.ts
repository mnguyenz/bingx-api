import { PlaceOrderParams, PlaceOrderResponse } from "~types";

export interface TradeMethods {
    placeOrder(params: PlaceOrderParams): Promise<PlaceOrderResponse>;
}