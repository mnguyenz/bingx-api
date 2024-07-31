export type Constructor<T = any> = new (...args: any[]) => T;

export type HttpRequestConfig = {
    baseURL: string;
    apiKey: string;
    method: string;
    url: string;
};

export type BaseResponse = {
    code: number;
    msg?: string;
    debugMsg?: string;
    timestamp?: bigint;
};
