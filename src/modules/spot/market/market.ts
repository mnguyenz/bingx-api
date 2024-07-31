import { HttpMethodEnum } from '~enums/common.enum';
import { MarketMethods } from './methods';
import {
    SPOT_RECENT_TRADES_LIST_URL,
    SPOT_SYMBOL_PRICE_TICKER_URL,
    SPOT_TRADING_SYMBOLS_URL
} from '~constants/url.constant';
import { RecentTradesListParams, SpotTradingSymbolsParams } from './params.type';
import { RecentTradesListResponse, SpotTradingSymbolsResponse, SymbolPriceTickerResponse } from './responses.type';
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
