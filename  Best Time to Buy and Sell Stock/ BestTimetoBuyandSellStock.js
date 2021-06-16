/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let max = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    if (max > prices[i]) {
      let difference = max - prices[i];
      if (maxProfit < difference) maxProfit = difference;
    }

    if (prices[i] > max) {
      max = prices[i];
    }
  }

  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
