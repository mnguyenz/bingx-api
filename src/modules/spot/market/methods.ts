import { RecentTradesListParams, SpotTradingSymbolsParams } from './params.type';
import { RecentTradesListResponse, SpotTradingSymbolsResponse, SymbolPriceTickerResponse } from './responses.type';

export interface MarketMethods {
    spotTradingSymbols(params?: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse>;
    recentTradesList(params: RecentTradesListParams): Promise<RecentTradesListResponse>;
    symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse>;
}
