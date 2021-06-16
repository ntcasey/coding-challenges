/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let cumlative = max[i - 1] + nums[i];
    if (cumlative > nums[i]) {
      max.push(cumlative);
    } else {
      max.push(nums[i]);
    }
  }

  return Math.max(...max);
};
