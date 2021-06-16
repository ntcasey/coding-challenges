/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums[i] = i + 1;
  }
  let result = [];
  function combineHelper(subset, remaining) {
    if (subset.length === k) {
      result.push(subset);
    }

    for (let i = 0; i < remaining.length; i++) {
      let newComb = subset.slice();
      newComb.push(remaining[i]);

      let end = remaining.slice(i + 1);
      combineHelper(newComb, end);
    }
  }

  combineHelper([], nums);
  return result;
};

let n = 4;
let k = 2;
console.log(combine(n, k));
