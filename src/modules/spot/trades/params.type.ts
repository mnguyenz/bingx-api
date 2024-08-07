import { OrderStatusEnum, OrderSideEnum, OrderTypeEnum } from '~enums';

// 1.
export type PlaceOrderParams = {
    symbol: string;
    side: OrderSideEnum;
    type: OrderTypeEnum;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
};

// 9.
export type QueryOrderHistoryParams = {
    symbol?: string;
    orderId?: number;
    startTime?: bigint;
    endTime?: bigint;
    pageIndex?: number;
    pageSize?: number;
    status?: OrderStatusEnum;
    type?: OrderTypeEnum;
};
