import { IntervalEnum, OrderBookAggregationEnum } from '~enums';

// 1, 5, 7, 8.
export type SpotTradingSymbolsParams = {
    symbol?: string;
};

// 2, 3, 10.
export type RecentTradesListParams = {
    symbol: string;
    limit?: number;
};

// 4, 9.
export type KlineCandlestickDataParams = {
    symbol: string;
    interval: IntervalEnum;
    startTime?: bigint;
    endTime?: bigint;
    limit?: number;
};

// 6.
export type OrderBookAggregationParams = {
    symbol: string;
    depth: number;
    type: OrderBookAggregationEnum;
};
