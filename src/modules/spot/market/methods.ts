import { SpotTradingSymbolsParams, SpotTradingSymbolsResponse } from '~types';

export interface MarketMethods {
    spotTradingSymbols(params: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse>;
}
