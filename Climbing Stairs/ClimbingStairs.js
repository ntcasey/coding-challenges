/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};

  function helper(steps) {
    if (steps in memo) return memo[steps];
    if (steps < 0) return 0;
    if (steps === 0) return 1;

    let comb = helper(steps - 1) + helper(steps - 2);
    memo[steps] = comb;
    return comb;
  }
  return helper(n);
};
