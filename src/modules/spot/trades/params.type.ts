import { OrderStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';

// 1.
export type PlaceOrderParams = {
    symbol: string;
    side: OrderSideEnum;
    type: OrderTypeEnum;
    stopPrice?: number;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    timeInForce?: string;
    recvWindow?: number;
};

// 3.
export type CancelOrderParams = {
    symbol: string;
    orderId?: bigint;
    clientOrderID?: string;
    cancelRestrictions?: OrderStatusEnum;
    recvWindow?: number;
};

// 9.
export type QueryOrderHistoryParams = {
    symbol?: string;
    orderId?: bigint;
    startTime?: number;
    endTime?: number;
    pageIndex?: number;
    pageSize?: number;
    status?: OrderStatusEnum;
    type?: OrderTypeEnum;
};
