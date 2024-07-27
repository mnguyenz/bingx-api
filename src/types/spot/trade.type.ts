import { OrderSideEnum, OrderTypeEnum } from "~enums";

export type PlaceOrderParams = {
    symbol: string;
    side: OrderSideEnum;
    type: OrderTypeEnum;
    quantity?: number,
    quoteOrderQty?: number,
    price?: number
}

export type PlaceOrderResponse = {
    orderId: number
}