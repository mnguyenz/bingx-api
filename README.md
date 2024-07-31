
# Node.js & Typescript BingX (Cryptocurrency Exchange) API

This library is an lightweight, easy, simple and clean connector to the [BingX Cryptocurrency Exchange API](https://bingx-api.github.io/docs/#/en-us/spot/changelog).

Right now I'm focus on Spot API, I will try to complete other APIs later
## Installation

```bash
npm install bingx-trading-api
```

## Documentation

Install via npm
```bash
const client = new Spot(API_KEY, API_SECRET);
```

Make requests
```bash
const spotTradingSymbol = await X_BINGX_CLIENT.spotTradingSymbols({ symbol });

const queryAssets = await X_BINGX_CLIENT.queryAssets();

const symbolPriceTicker = await X_BINGX_CLIENT.symbolPriceTicker({ symbol });

...
```



## Support

For support my efforts, please register with my referral links:

[BingX](https://bingx.com/invite/GAY657)

[Binance](https://accounts.binance.com/register?ref=13221516)

[Bybit](https://www.bybitglobal.com/invite?ref=ZDOANPW)

[OKX](https://www.okx.com/join/91073671)

Or buy me a coffee

    BTC (BEP20): 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc
    ETH (ERC20): 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc
    ETH (BEP20): 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc
    ETH (Optimism) 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc
    USDT (TRC20): TVkJAmdh7UcrsGG1EjXsmSroXakCGn1LXT
    USDT (BEP20): 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc
    USDT (Optimism): 0x98dca74ec33d7fe5d11e42689914d3041f65f4fc

Thank you so much for all the support
## Features

- [x]   Spot Trading
    - [x]  Market
        - [x]   1. Spot Trading Symbols
        - [x]   7. Symbol Price Ticker
    - [x]    Fund Acount
        - [x]   1.  Query Assets
        - [x]   3.  Asset transfer records
    - [x]  Trade
        - [x]   1. Place Order
        - [x]   9. Query Order History
