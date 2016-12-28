/*
Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

let stockPricesYesterday = [10, 6, 14, 7, 5, 8, 11, 9];

let getMaxProfit = (stockPricesYesterday) => {
  let bestProfit = 0;

  for (let i = 0; i < stockPricesYesterday.length - 1; i++) {
    let currentLow = stockPricesYesterday[i];
    for (let j = i + 1; j < stockPricesYesterday.length; j++) {
      let currentHigh = stockPricesYesterday[j];
      let currentProfit = currentHigh - currentLow;
      bestProfit = (currentProfit > bestProfit) ? currentProfit : bestProfit;
    }
  }

  return bestProfit;
};

/* O(n) Solution */

let stockPricesYesterday2 = [10, 6, 6, 7, 5, 8, 11, 9];

let getMaxProfit2 = (stocks) => { 
  let maxProfit = 0;
  let bestBuyPrice = stocks[0];

  for (let i = 1; i < stocks.length; i++) {
    bestBuyPrice = Math.min(stocks[i], bestBuyPrice);
    maxProfit = Math.max(maxProfit, stocks[i] - bestBuyPrice);
  }

  return maxProfit;
};