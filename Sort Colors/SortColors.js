/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 1) return nums;

  let front = 0;
  let back = nums.length - 1;
  let i = 0;

  while (i <= back) {
    if (nums[i] === 0 && nums[front] === 0) {
      front += 1;
      i += 1;
    } else if (nums[i] === 0 && i !== front) {
      swap(nums, i, front);
      front += 1;
      i += 1;
    } else if (nums[i] === 2) {
      swap(nums, i, back);
      back -= 1;
    } else {
      i += 1;
    }
  }

  return nums;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [2, 0, 1];
console.log(sortColors(nums));
