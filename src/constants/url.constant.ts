export const BASE_URL = 'https://open-api.bingx.com';

// Market
export const SPOT_TRADING_SYMBOLS_URL = '/openApi/spot/v1/common/symbols';
export const SPOT_RECENT_TRADES_LIST_URL = '/openApi/spot/v1/market/trades';
export const SPOT_ORDER_BOOK_URL = '/openApi/spot/v1/market/depth';
export const SPOT_KLINE_CANDLESTICK_DATA_URL = '/openApi/spot/v2/market/kline';
export const SPOT_TICKER_PRICE_24HR_CHANGE_STATISTICS_URL = '/openApi/spot/v1/ticker/24hr';
export const SPOT_ORDER_BOOK_AGGREGATION_URL = '/openApi/spot/v2/market/depth';
export const SPOT_SYMBOL_PRICE_TICKER_URL = '/openApi/spot/v1/ticker/price';
export const SPOT_SYMBOL_ORDER_BOOK_TICKER_URL = '/openApi/spot/v1/ticker/bookTicker';
export const SPOT_HISTORICAL_KLINE_URL = '/openApi/market/his/v1/kline';
export const SPOT_OLD_TRADE_LOOKUP_URL = '/openApi/market/his/v1/trade';

// Trade
export const SPOT_PLACE_ORDER_URL = '/openApi/spot/v1/trade/order';
export const SPOT_CANCEL_ORDER_URL = '/openApi/spot/v1/trade/cancel';
export const SPOT_CANCEL_ALL_OPEN_ORDERS_URL = '/openApi/spot/v1/trade/cancelOpenOrders';
export const SPOT_QUERY_ORDER_DETAILS_URL = '/openApi/spot/v1/trade/query';
export const SPOT_CURRENT_OPEN_ORDERS_URL = '/openApi/spot/v1/trade/openOrders';
export const SPOT_QUERY_ORDER_HISTORY_URL = '/openApi/spot/v1/trade/historyOrders';
export const SPOT_QUERY_TRADING_COMMISSION_RATE_URL = '/openApi/spot/v1/user/commissionRate';

export const SPOT_QUERY_ASSETS_URL = '/openApi/spot/v1/account/balance';

export const SPOT_ASSET_TRANSFER_RECORDS_URL = '/openApi/api/v3/asset/transfer';
