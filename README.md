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



## Features

- [x]    Fund Acount
    - [x]   1.  Query Assets
- [x]   Spot Trading
    - [x]  Market
        - [x]   1. Spot Trading Symbols
        - [x]   7. Symbol Price Ticker
    - [x]  Trade
        - [x]   1. Place Order
        - [x]   9. Query Order History


