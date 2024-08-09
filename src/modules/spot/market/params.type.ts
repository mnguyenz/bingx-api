import { IntervalEnum, OrderBookAggregationEnum } from '~enums';
import { BaseParam } from '~helpers/base.type';

// 1, 5, 7, 8.
export type SpotTradingSymbolsParams = {
    symbol?: string;
} & BaseParam;

// 2, 3, 10.
export type RecentTradesListParams = {
    symbol: string;
    limit?: number;
} & BaseParam;

// 4, 9.
export type KlineCandlestickDataParams = {
    symbol: string;
    interval: IntervalEnum;
    startTime?: number;
    endTime?: number;
    limit?: number;
} & BaseParam;

// 6.
export type OrderBookAggregationParams = {
    symbol: string;
    depth: number;
    type: OrderBookAggregationEnum;
} & BaseParam;
