import { IntervalEnum, OrderBookAggregationEnum } from '~enums';

// 1, 5, 7, 8.
export type SpotTradingSymbolsParams = {
    symbol?: string;
    recvWindow?: number;
};

// 2, 3, 10.
export type RecentTradesListParams = {
    symbol: string;
    limit?: number;
    recvWindow?: number;
};

// 4, 9.
export type KlineCandlestickDataParams = {
    symbol: string;
    interval: IntervalEnum;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
};

// 6.
export type OrderBookAggregationParams = {
    symbol: string;
    depth: number;
    type: OrderBookAggregationEnum;
    recvWindow?: number;
};
