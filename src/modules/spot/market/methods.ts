import { SpotTradingSymbolsParams, SpotTradingSymbolsResponse, SymbolPriceTickerResponse } from '~types';

export interface MarketMethods {
    spotTradingSymbols(params?: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse>;
    symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse>;
}
