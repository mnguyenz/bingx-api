import { HttpMethodEnum } from '~enums/common.enum';
import { MarketMethods } from './methods';
import {
    SPOT_ORDER_BOOK_URL,
    SPOT_RECENT_TRADES_LIST_URL,
    SPOT_SYMBOL_PRICE_TICKER_URL,
    SPOT_TRADING_SYMBOLS_URL
} from '~constants/url.constant';
import { RecentTradesListParams, SpotTradingSymbolsParams } from './params.type';
import {
    OrderBookResponse,
    RecentTradesListResponse,
    SpotTradingSymbolsResponse,
    SymbolPriceTickerResponse
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
            return await this.makeRequest(HttpMethodEnum.GET, url);
        }

        async orderBook(params: RecentTradesListParams): Promise<OrderBookResponse> {
            const url = this.preparePath(SPOT_ORDER_BOOK_URL, {
                ...params,
                symbol: params.symbol.toUpperCase()
            });
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            if (response.code === 0) {
                const parsedBids = response.data.bids.map((order) => [parseFloat(order[0]), parseFloat(order[1])]);
                const parsedAsks = response.data.asks.map((order) => [parseFloat(order[0]), parseFloat(order[1])]);
                const parsedResponse = {
                    ...response,
                    data: {
                        ...response.data.data,
                        bids: parsedBids,
                        asks: parsedAsks
                    }
                };
                return parsedResponse;
            } else {
                return response;
            }
        }

        async symbolPriceTicker(params?: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse> {
            const url = this.preparePath(SPOT_SYMBOL_PRICE_TICKER_URL, {
                symbol: params?.symbol?.toUpperCase()
            });
            const response = await this.makeRequest(HttpMethodEnum.GET, url);
            const parsedResponse = {
                ...response,
                data: response.data?.map((item) => ({
                    ...item,
                    trades: item.trades?.map((trade) => ({
                        ...trade,
                        price: parseFloat(trade.price),
                        volume: parseFloat(trade.volume)
                    }))
                }))
            };
            return parsedResponse;
        }
    };
}
