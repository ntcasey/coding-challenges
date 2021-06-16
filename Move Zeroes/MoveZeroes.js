/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else {
      if (nums[j] !== 0) {
        swap(i, j, nums);
        i++;
        j++;
      } else {
        j++;
      }
    }
  }
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [0];
moveZeroes(nums);
