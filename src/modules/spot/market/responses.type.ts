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
