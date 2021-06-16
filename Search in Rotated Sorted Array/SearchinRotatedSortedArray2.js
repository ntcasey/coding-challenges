/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  let minIndex = findMinIndex(nums);

  // binary search on whole array
  if (minIndex === 0) {
    return binarySearch(0, nums.length - 1, nums, target);
  }

  if (nums[minIndex] <= target && target <= nums[nums.length - 1]) {
    return binarySearch(minIndex, nums.length - 1, nums, target);
  } else {
    return binarySearch(0, minIndex, nums, target);
  }
};

function binarySearch(start, end, nums, target) {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findMinIndex(nums) {
  if (nums[0] < nums[nums.length - 1]) return 0;

  function helper(start, end) {
    if (start + 1 === end) return nums[start] < nums[end] ? start : end;
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > nums[end]) {
      return helper(mid, end);
    } else {
      return helper(start, mid);
    }
  }
  return helper(0, nums.length - 1);
}
