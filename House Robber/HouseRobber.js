/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let l = Math.max(nums[0], nums[1]);

  let max = [nums[0], l];
  for (let i = 2; i < nums.length; i++) {
    let sum = max[i - 2] + nums[i];
    if (sum > max[i - 1]) {
      max.push(sum);
    } else {
      max.push(max[i - 1]);
    }
  }

  return max[max.length - 1];
};
