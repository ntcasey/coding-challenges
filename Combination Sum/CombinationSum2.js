/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const output = [];
  function helper(combBuilder, start, currentSum) {
    if (currentSum === target) {
      output.push([...combBuilder]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (currentSum + candidates[i] > target) {
        return;
      }
      combBuilder.push(candidates[i]);
      helper(combBuilder, i, currentSum + candidates[i]);
      combBuilder.pop();
    }
  }
  helper([], 0, 0);
  return output;
};

combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15);
