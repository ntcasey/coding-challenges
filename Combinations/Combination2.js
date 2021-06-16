/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n == 1 && k == 1) return [[1]];

  const result = [];
  function helper(combBuilder, start) {
    if (combBuilder.length === k) {
      result.push(Array.from(combBuilder));
      return;
    }

    for (let i = start; i <= n; i++) {
      combBuilder.push(i);
      helper(combBuilder, i + 1);
      combBuilder.pop();
    }
  }
  helper([], 1);
  return result;
};
