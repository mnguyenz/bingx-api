import { OrderStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';
import { BaseParam } from '~helpers/base.type';

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
} & BaseParam;

// 3.
export type CancelOrderParams = {
    cancelRestrictions?: OrderStatusEnum;
} & QueryOrderDetailsParams;

// 7.
export type QueryOrderDetailsParams = {
    symbol: string;
    orderId?: bigint;
    clientOrderID?: string;
} & BaseParam;

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
} & BaseParam;

// 11.
export type SymbolRequiredParams = {
    symbol: string;
} & BaseParam;
