import { Constructor } from '~types/base.type';
import { HttpMethodEnum } from '~enums/common.enum';
import { MarketMethods } from './methods';
import { SpotTradingSymbolsParams, SpotTradingSymbolsResponse, SymbolPriceTickerResponse } from '~types';
import { SPOT_SYMBOL_PRICE_TICKER_URL, SPOT_TRADING_SYMBOLS_URL } from '~constants/url.constant';

export function mixinMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        async spotTradingSymbols(params: SpotTradingSymbolsParams): Promise<SpotTradingSymbolsResponse> {
            const url = this.preparePath(SPOT_TRADING_SYMBOLS_URL, {
                symbol: params?.symbol?.toUpperCase()
            });
            return await this.makeRequest(HttpMethodEnum.GET, url);
        }

        async symbolPriceTicker(params: SpotTradingSymbolsParams): Promise<SymbolPriceTickerResponse> {
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
