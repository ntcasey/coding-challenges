/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = {};
  function uniquePathsHelper(m, n) {
    if (`${m}-${n}` in memo) return memo[`${m}-${n}`];
    if (`${n}-${m}` in memo) return memo[`${n}-${m}`];
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;

    let result = uniquePathsHelper(m - 1, n) + uniquePathsHelper(m, n - 1);
    if (m > n) {
      memo[`${m}-${n}`] = result;
    } else {
      memo[`${n}-${m}`] = result;
    }

    return result;
  }
  return uniquePathsHelper(m, n);
};
