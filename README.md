
# Node.js & Typescript BingX (Cryptocurrency Exchange) API

This library is a lightweight, easy, simple and clean connector to the [BingX Cryptocurrency Exchange API](https://bingx-api.github.io/docs/#/en-us/spot/changelog).

Right now I'm focus on Spot APIs, I will try to complete other APIs later
## Installation

```bash
npm install bingx-trading-api
```

## Documentation

Init client
```bash
const client = new Spot(API_KEY, API_SECRET);
```

Make requests
```bash
const spotTradingSymbol = await client.spotTradingSymbols({ symbol });

const queryAssets = await client.queryAssets();

const symbolPriceTicker = await client.symbolPriceTicker({ symbol });

...
```



## Support

For support my efforts, please register with my referral links:

[BingX](https://bingx.com/invite/GAY657)

[Binance](https://accounts.binance.com/register?ref=13221516)

[Bybit](https://www.bybitglobal.com/invite?ref=ZDOANPW)

[OKX](https://www.okx.com/join/91073671)

Or buy me a coffee

    BTC (BEP20): 0x613c399b33c33c0445dc802592580695a4d41134
    ETH (ERC20): 0x613c399b33c33c0445dc802592580695a4d41134
    ETH (BEP20): 0x613c399b33c33c0445dc802592580695a4d41134
    USDT (TRC20): TLtBXUHcUYSJg4pftQbbJ2ZuvM22C1p8nG
    USDT (BEP20): 0x613c399b33c33c0445dc802592580695a4d41134

Thank you so much for all the support
## Features

[The list BingX supported APIs](https://bingx-api.github.io/docs/#/en-us/spot/changelog). I am implementing the ones I am using first, then the others later. Contact me at mnguyen2606@gmail.com if you need any specific APIs, and I will prioritize it. Thank you.

- [x]   Spot Trading
    - [x]  Market
        - [x]   1. Spot Trading Symbols
        - [x]   2. Recent Trades List
        - [x]   3. Order Book
        - [x]   4. Kline/Candlestick Data
        - [x]   5. 24hr Ticker Price Change Statistics
        - [x]   6. Order Book Aggregation
        - [x]   7. Symbol Price Ticker
        - [x]   8. Symbol Order Book Ticker
        - [x]   9. Historical K-line
        - [x]   10. Old Trade Lookup
    - [x]    Fund Acount
        - [x]   1.  Query Assets
        - [x]   3.  Asset transfer records
    - [x]  Trade
        - [x]   1. Place Order
        - [x]   3. Cancel Order
        - [x]   5. Cancel all Open Orders on a Symbol
        - [x]   7. Query Order Details
        - [x]   8. Current Open Orders
        - [x]   9. Query Order History
        - [x]   11. Query Trading Commission Rate

