export type Constructor<T = any> = new (...args: any[]) => T;

export type HttpRequestConfig = {
    baseURL: string;
    apiKey: string;
    method: string;
    url: string;
}
