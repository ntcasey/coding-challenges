/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  //let min = Infinity;
  const memo = {};
  function helper(index) {
    if (index === nums.length - 1) return 0;
    if (index in memo) return memo[index];

    let val = nums[index];

    let result;
    let min = Infinity;
    for (let i = 1; i <= val; i++) {
      result = helper(index + i);
      min = Math.min(result, min) + 1;
    }
    memo[index] = min;
    return min;
  }
  return helper(0);
};
