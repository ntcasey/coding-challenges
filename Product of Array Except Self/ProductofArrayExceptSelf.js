/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = new Array(nums.length);
  result[0] = 1;
  let prev = nums[0];

  for (let j = 1; j < nums.length; j++) {
    result[j] = prev;
    prev = prev * nums[j];
  }

  prev = nums[nums.length - 1];
  for (let j = nums.length - 2; j >= 0; j--) {
    result[j] *= prev;
    prev = prev * nums[j];
  }

  return result;
};

let i = [1, 2, 3, 4];
console.log(productExceptSelf(i));
