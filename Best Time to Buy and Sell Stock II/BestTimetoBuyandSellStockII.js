/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let profit = 0;
  let buy = -1;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i] && buy === -1) {
      buy = prices[i - 1];
      continue;
    }

    if (prices[i - 1] > prices[i] && buy !== -1) {
      profit += prices[i - 1] - buy;
      buy = -1;
    }
  }

  if (profit === 0 && buy === -1) return 0;
  if (buy !== -1) return profit + prices[prices.length - 1] - buy;

  return profit;
};

let prices = [7, 6, 4, 3, 1];
maxProfit(prices);

[6, 1, 3, 2, 4, 7];
