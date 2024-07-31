import { OrderHistoryStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type PlaceOrderResponse = {
    data: {
        symbol: string;
        orderId: bigint;
        transactTime: bigint;
        price: number;
        origQty: number;
        executedQty: number;
        cummulativeQuoteQty: number;
        status: OrderHistoryStatusEnum;
        type: OrderTypeEnum;
        side: OrderSideEnum;
        clientOrderID: string;
    };
} & BaseResponse;

// 9.
export type QueryOrderHistoryResponse = {
    data?: {
        orders: SingleOrderHistoryResponse[];
    };
} & BaseResponse;

export type SingleOrderHistoryResponse = {
    symbol: string;
    orderId: bigint;
    price: number;
    stopPrice: number;
    origQty: number;
    executedQty: number;
    cummulativeQuoteQty: number;
    status: OrderHistoryStatusEnum;
    type: OrderTypeEnum;
    side: OrderSideEnum;
    time: bigint;
    updateTime: bigint;
    origQuoteOrderQty: number;
    clientOrderID: string;
    fee: number;
};
