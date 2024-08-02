import {
    KlineCandlestickDataParams,
    OrderBookAggregationParams,
    RecentTradesListParams,
    SpotTradingSymbolsParams
} from './params.type';
import {
    KlineCandlestickDataResponse,
    OldTradeLookupResponse,
    OrderBookAggregationResponse,
    OrderBookResponse,
    RecentTradesListResponse,
    SpotTradingSymbolsResponse,
    SymbolOrderBookTickerResponse,
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
    orderBookAggregation(params: OrderBookAggregationParams): Promise<OrderBookAggregationResponse>;
    symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse>;
    symbolOrderBookTicker(params?: SpotTradingSymbolsParams): Promise<SymbolOrderBookTickerResponse>;
    historicalKline(params: KlineCandlestickDataParams): Promise<KlineCandlestickDataResponse>;
    oldTradeLookup(params: RecentTradesListParams): Promise<OldTradeLookupResponse>;
}
