import { Base } from '~modules/base';

export class Spot extends Base {
    constructor(apiKey = '', apiSecret = '', baseURL = '') {
        super(apiKey, apiSecret, baseURL);
    }
}
