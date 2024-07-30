export enum OrderSideEnum {
    BUY = 'BUY',
    SELL = 'SELL'
}

export enum OrderTypeEnum {
    MARKET = 'MARKET',
    LIMIT = 'LIMIT',
    TAKE_STOP_LIMIT = 'TAKE_STOP_LIMIT',
    TAKE_STOP_MARKET = 'TAKE_STOP_MARKET',
    TRIGGER_LIMIT = 'TRIGGER_LIMIT',
    TRIGGER_MARKET = 'TRIGGER_MARKET'
}

export enum OrderHistoryStatusEnum {
    FILLED = 'FILLED',
    CANCELED = 'CANCELED',
    FAILED = 'FAILED'
}
