/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let current = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) current = nums[i];
    if (nums[i] === current) {
      count++;
    } else {
      count--;
    }
  }
  return current;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
majorityElement(nums);
