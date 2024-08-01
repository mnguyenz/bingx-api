import { RecentTradesListParams, SpotTradingSymbolsParams } from './params.type';
import {
    OrderBookResponse,
    RecentTradesListResponse,
    SpotTradingSymbolsResponse,
    SymbolPriceTickerResponse
} from './responses.type';

export interface MarketMethods {
    spotTradingSymbols(params?: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse>;
    recentTradesList(params: RecentTradesListParams): Promise<RecentTradesListResponse>;
    orderBook(params: RecentTradesListParams): Promise<OrderBookResponse>;
    symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse>;
}
