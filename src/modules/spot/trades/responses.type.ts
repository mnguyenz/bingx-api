import { OrderStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type PlaceOrderResponse = {
    data: SinglePlaceOrderResponse;
} & BaseResponse;

// 5.
export type PlaceOrdersResponse = {
    data: {
        orders: SinglePlaceOrderResponse[];
    };
} & BaseResponse;

export type SinglePlaceOrderResponse = {
    symbol: string;
    orderId: bigint;
    transactTime: bigint;
    price: number;
    stopPrice: number;
    origQty: number;
    executedQty: number;
    cummulativeQuoteQty: number;
    status: OrderStatusEnum;
    type: OrderTypeEnum;
    side: OrderSideEnum;
    clientOrderID: string;
};

// 8, 9.
export type OrdersResponse = {
    data?: {
        orders: SingleOrderResponse[];
    };
} & BaseResponse;

export type SingleOrderResponse = {
    symbol: string;
    orderId: bigint;
    price: number;
    stopPrice: number;
    origQty: number;
    executedQty: number;
    cummulativeQuoteQty: number;
    status: OrderStatusEnum;
    type: OrderTypeEnum;
    side: OrderSideEnum;
    time: bigint;
    updateTime: bigint;
    origQuoteOrderQty: number;
    clientOrderID: string;
    fee: number;
};
