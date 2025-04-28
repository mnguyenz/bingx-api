import { HttpMethodEnum } from '~enums/common.enum';
import { MarketMethods } from './methods';
import {
    SPOT_HISTORICAL_KLINE_URL,
    SPOT_KLINE_CANDLESTICK_DATA_URL,
    SPOT_OLD_TRADE_LOOKUP_URL,
    SPOT_ORDER_BOOK_AGGREGATION_URL,
    SPOT_ORDER_BOOK_URL,
    SPOT_RECENT_TRADES_LIST_URL,
    SPOT_SYMBOL_ORDER_BOOK_TICKER_URL,
    SPOT_SYMBOL_PRICE_TICKER_URL,
    SPOT_TICKER_PRICE_24HR_CHANGE_STATISTICS_URL,
    SPOT_TRADING_SYMBOLS_URL
} from '~constants/url.constant';
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
import { Constructor } from '~helpers/base.type';

export function mixinMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        async spotTradingSymbols(params?: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse> {
            const url = this.preparePath(SPOT_TRADING_SYMBOLS_URL, {
                symbol: params?.symbol?.toUpperCase()
            });
            return await this.makeRequest(HttpMethodEnum.GET, url);
        }

        async recentTradesList(params: RecentTradesListParams): Promise<RecentTradesListResponse> {
            const url = this.preparePath(SPOT_RECENT_TRADES_LIST_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async orderBook(params: RecentTradesListParams): Promise<OrderBookResponse> {
            const url = this.preparePath(SPOT_ORDER_BOOK_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async klineCandlestickData(params: KlineCandlestickDataParams): Promise<KlineCandlestickDataResponse> {
            const url = this.preparePath(SPOT_KLINE_CANDLESTICK_DATA_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async tickerPrice24hrChangeStatistics(
            params?: SpotTradingSymbolsParams
        ): Promise<TickerPrice24hrChangeStatisticsResponse> {
            const url = this.prepareSignedPath(SPOT_TICKER_PRICE_24HR_CHANGE_STATISTICS_URL, {
                ...params,
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async orderBookAggregation(params: OrderBookAggregationParams): Promise<OrderBookAggregationResponse> {
            const url = this.preparePath(SPOT_ORDER_BOOK_AGGREGATION_URL, {
                ...params,
                symbol: params.symbol.replace('-', '_').toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse> {
            const url = this.preparePath(SPOT_SYMBOL_PRICE_TICKER_URL, {
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async symbolOrderBookTicker(params?: SpotTradingSymbolsParams): Promise<SymbolOrderBookTickerResponse> {
            const url = this.preparePath(SPOT_SYMBOL_ORDER_BOOK_TICKER_URL, {
                symbol: params?.symbol?.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async historicalKline(params: KlineCandlestickDataParams): Promise<KlineCandlestickDataResponse> {
            const url = this.preparePath(SPOT_HISTORICAL_KLINE_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }

        async oldTradeLookup(params: RecentTradesListParams): Promise<OldTradeLookupResponse> {
            const url = this.preparePath(SPOT_OLD_TRADE_LOOKUP_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            return this.makeRequest(HttpMethodEnum.GET, url);
        }
    };
}
