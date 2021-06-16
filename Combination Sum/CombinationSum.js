/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  function combinationHelper(sum, combination, remain) {
    if (sum > target) return;
    if (sum === target) {
      result.push(combination);
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      //if (combination.length - 1 > candidates[i]) continue;
      let newComb = combination.slice();
      newComb.push(remain[i]);
      combinationHelper(sum + remain[i], newComb, remain.slice(i));
    }
  }
  combinationHelper(0, [], candidates);
  return result;
};

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
