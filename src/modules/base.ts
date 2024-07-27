import { buildQueryString, httpRequest } from "src/helpers/utils";
import * as crypto from 'crypto';
import { mixinTrade } from "~modules";

export const Base = mixinTrade(class {
    apiKey: string;
    apiSecret: string;
    baseURL: string;

    constructor(apiKey: string, apiSecret: string, baseURL?: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.baseURL = baseURL || 'https://open-api.bingx.com';
    }

    async makeRequest(method: string, url: string) {
        return await httpRequest({
            method,
            baseURL: this.baseURL,
            url,
            apiKey: this.apiKey,
        });
    }

    prepareSignedPath(path: string, options?: object): string {
        const timeStamp = Date.now();
        const newOptions = { ...options, timestamp: timeStamp };
        const params = buildQueryString(newOptions);
        const signature = crypto.createHmac('sha256', this.apiSecret).update(params).digest('hex');
        return `${path}?${params}&signature=${signature}`;
    }
});
