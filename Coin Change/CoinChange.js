/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = {};
  //coins = coins.sort((a, b) => b - a);
  function coinHelper(remainAmount) {
    if (remainAmount === 0) return 0;
    if (remainAmount in memo) return memo[remainAmount];

    let min = null;
    for (let c of coins) {
      let remain = remainAmount - c;
      if (remain >= 0) {
        let result = coinHelper(remain);
        memo[remain] = result;
        if (result >= 0) {
          if (min === null || min > memo[remain]) {
            min = memo[remain];
          }
        }
      }
    }
    return min !== null ? min + 1 : -1;
  }

  return coinHelper(amount);
};

let coins = [1, 2, 5];
let amount = 101;

// let coins = [186, 419, 83, 408];
// let amount = 6249;
console.log(coinChange(coins, amount));
