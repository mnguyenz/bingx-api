import { IntervalEnum } from '~enums';

// 1, 5, 7.
export type SpotTradingSymbolsParams = {
    symbol?: string;
};

// 2, 3.
export type RecentTradesListParams = {
    symbol: string;
    limit?: number;
};

// 4.
export type KlineCandlestickDataParams = {
    symbol: string;
    interval: IntervalEnum;
    startTime?: bigint;
    endTime?: bigint;
    limit?: number;
};
