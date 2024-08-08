import { OrderStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type PlaceOrderResponse = {
    data: SinglePlaceOrderResponse;
} & BaseResponse;

// 3.
export type CancelOrderResponse = {
    data?: CancelOrderData;
} & BaseResponse;

export type CancelOrderData = {
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
};

// 5.
export type PlaceOrdersResponse = {
    data: {
        orders: SinglePlaceOrderResponse[];
    };
} & BaseResponse;

export type SinglePlaceOrderResponse = {
    symbol: string;
    orderId: bigint;
    transactTime: number;
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

export type SingleOrderResponse = CancelOrderData & {
    time: number;
    updateTime: number;
    origQuoteOrderQty: number;
    clientOrderID: string;
    fee: number;
};
