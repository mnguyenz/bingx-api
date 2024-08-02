import { KlineCandlestickDataParams, RecentTradesListParams, SpotTradingSymbolsParams } from './params.type';
import {
    KlineCandlestickDataResponse,
    OrderBookResponse,
    RecentTradesListResponse,
    SpotTradingSymbolsResponse,
    SymbolPriceTickerResponse,
    TickerPrice24hrChangeStatisticsResponse
} from './responses.type';

export interface MarketMethods {
    spotTradingSymbols(params?: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse>;
    recentTradesList(params: RecentTradesListParams): Promise<RecentTradesListResponse>;
    orderBook(params: RecentTradesListParams): Promise<OrderBookResponse>;
    klineCandlestickData(params: KlineCandlestickDataParams): Promise<KlineCandlestickDataResponse>;
    tickerPrice24hrChangeStatistics(
        params?: SpotTradingSymbolsParams
    ): Promise<TickerPrice24hrChangeStatisticsResponse>;
    symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse>;
}
