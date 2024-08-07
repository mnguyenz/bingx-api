export enum OrderSideEnum {
    BUY = 'BUY',
    SELL = 'SELL'
}

export enum OrderTypeEnum {
    LIMIT = 'LIMIT',
    MARKET = 'MARKET',
    TAKE_STOP_LIMIT = 'TAKE_STOP_LIMIT',
    TAKE_STOP_MARKET = 'TAKE_STOP_MARKET',
    TRIGGER_LIMIT = 'TRIGGER_LIMIT',
    TRIGGER_MARKET = 'TRIGGER_MARKET'
}

export enum OrderStatusEnum {
    NEW = 'NEW',
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    FILLED = 'FILLED',
    CANCELED = 'CANCELED',
    FAILED = 'FAILED',
    PENDING = 'PENDING'
}
