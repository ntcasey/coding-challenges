/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  return binaryPeakSearch(nums);
};

function binaryPeakSearch(nums) {
  let start = 1;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((end - start) / 2) + start;
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let nums = [1, 2, 1, 3, 5, 6, 4];
findPeakElement(nums);
