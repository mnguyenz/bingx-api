import { SpotTradingSymbolsResponseStatusEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type SpotTradingSymbolsResponse = {
    data?: {
        symbols: SingleSymbolResponse[];
    };
} & BaseResponse;

export type SingleSymbolResponse = {
    symbol: string;
    tickSize: number;
    stepSize: number;
    minNotional: number;
    maxNotional: number;
    status: SpotTradingSymbolsResponseStatusEnum;
    apiStateBuy: boolean;
    apiStateSell: boolean;
    timeOnline: number;
};

// 2.
export type RecentTradesListResponse = {
    data?: SingleRecentTradeResponse[];
} & BaseResponse;

export type SingleRecentTradeResponse = {
    id: number;
    price: number;
    qty: number;
    time: bigint;
    buyerMaker: boolean;
};

// 3.
export type OrderBookResponse = {
    data?: {
        bids: number[][];
        asks: number[][];
        ts: bigint;
    };
} & BaseResponse;

// 4, 9.
export type KlineCandlestickDataResponse = {
    data?: CandlestickData[];
} & BaseResponse;

export type CandlestickData = [
    bigint, // Candlestick chart open time
    number, // Open price
    number, // Max price
    number, // Min price
    number, // Close price
    number, // Trading volume (number of coins)
    bigint, // Candlestick chart close time
    number // Volume
];

// 5.
export type TickerPrice24hrChangeStatisticsResponse = {
    data?: SingleTickerPrice24hrChangeStatisticsResponse[];
} & BaseResponse;

export type SingleTickerPrice24hrChangeStatisticsResponse = {
    symbol: string;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    lastPrice: number;
    closePrice: number;
    priceChange: number;
    priceChangePercent: string;
    volume: number;
    quoteVolume: number;
    openTime: bigint;
    closeTime: bigint;
    askPrice: number;
    askQty: number;
    bidPrice: number;
    bidQty: number;
};

// 6.
export type OrderBookAggregationResponse = {
    data?: {
        bids: number[][];
        asks: number[][];
        ts: bigint;
    };
} & BaseResponse;

// 7.
export type SymbolPriceTickerResponse = {
    data: SinglePriceTickerResponse[];
} & BaseResponse;

export type SinglePriceTickerResponse = {
    symbol: string;
    trades: {
        tradeId: string;
        price: number;
        volume: number;
    }[];
};

// 8.
export type SymbolOrderBookTickerResponse = {
    data?: SingleOrderBookTickerResponse[];
} & BaseResponse;

export type SingleOrderBookTickerResponse = {
    eventType: string;
    time: bigint;
    symbol: string;
    bidPrice: number;
    bidVolume: number;
    askPrice: number;
    askVolume: number;
};

// 10.
export type OldTradeLookupResponse = {
    data?: SingleOldTradeLookupResponse[];
} & BaseResponse;

export type SingleOldTradeLookupResponse = {
    tid: string;
    t: bigint;
    ms: number;
    s: string;
    p: number;
    v: number;
};
