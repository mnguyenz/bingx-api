export enum SpotTradingSymbolsResponseStatusEnum {
    OFFLINE = 0,
    ONLINE = 1,
    PRE_OPEN = 5,
    TRADING_SUSPENDED = 25
}

export enum IntervalEnum {
    MIN_1 = '1m',
    MIN_3 = '3m',
    MIN_5 = '5m',
    MIN_15 = '15m',
    MIN_30 = '30m',
    HOURS_1 = '1h',
    HOURS_2 = '2h',
    HOURS_4 = '4h',
    HOURS_6 = '6h',
    HOURS_8 = '8h',
    HOURS_12 = '12h',
    DAY_1 = '1d',
    DAY_3 = '3d',
    WEEK_1 = '1w',
    MONTH_1 = '1M'
}

export enum OrderBookAggregationEnum {
    STEP_0 = 'step0',
    STEP_1 = 'step1',
    STEP_2 = 'step2',
    STEP_3 = 'step3',
    STEP_4 = 'step4',
    STEP_5 = 'step5'
}
