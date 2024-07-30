import { buildQueryString, httpRequest, removeEmptyValue } from 'src/helpers/utils';
import * as crypto from 'crypto';
import { mixinFundAccount, mixinMarket, mixinTrade } from '~modules';
import { BASE_URL } from '~constants/url.constant';

export const Base = mixinFundAccount(
    mixinMarket(
        mixinTrade(
            class {
                apiKey: string;
                apiSecret: string;
                baseURL: string;

                constructor(apiKey: string, apiSecret: string, baseURL?: string) {
                    this.apiKey = apiKey;
                    this.apiSecret = apiSecret;
                    this.baseURL = baseURL || BASE_URL;
                }

                async makeRequest(method: string, url: string) {
                    return await httpRequest({
                        method,
                        baseURL: this.baseURL,
                        url,
                        apiKey: this.apiKey
                    });
                }

                preparePath(path: string, options?: object): string {
                    if (!options) return path;
                    options = removeEmptyValue(options);
                    const params = buildQueryString(options);
                    return `${path}?${params}`;
                }

                prepareSignedPath(path: string, options?: object): string {
                    const timeStamp = Date.now();
                    const newOptions = { ...options, timestamp: timeStamp };
                    options = removeEmptyValue(newOptions);
                    const params = buildQueryString(options);
                    const signature = crypto.createHmac('sha256', this.apiSecret).update(params).digest('hex');
                    return `${path}?${params}&signature=${signature}`;
                }
            }
        )
    )
);
