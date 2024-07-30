import { OrderHistoryStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';
import { BaseResponse } from '~types/base.type';

export type PlaceOrderParams = {
    symbol: string;
    side: OrderSideEnum;
    type: OrderTypeEnum;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
};

export type QueryOrderHistoryParams = {
    symbol?: string;
    orderId?: number;
    startTime?: bigint;
    endTime?: bigint;
    pageIndex?: number;
    pageSize?: number;
    status?: OrderHistoryStatusEnum;
    type?: OrderTypeEnum;
};

export type PlaceOrderResponse = {
    orderId: number;
};

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
