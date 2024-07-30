import { SpotTradingSymbolsResponseStatusEnum } from '~enums';
import { BaseResponse } from '~types/base.type';

export type SpotTradingSymbolsParams = {
    symbol?: string;
};

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
    timeOnline: bigint;
};
