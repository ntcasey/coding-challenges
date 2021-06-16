/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }

  function binarySearch(start, end) {
    if (start > end) return [-1, -1];

    const mid = Math.floor((end - start) / 2) + start;
    if (nums[mid] === target) {
      return [start, end]; // return region
    } else if (nums[mid] > target) {
      return binarySearch(start, mid - 1);
    } else {
      return binarySearch(mid + 1, end);
    }
  }
  let [startRegion, endRegion] = binarySearch(0, nums.length - 1);
  if (startRegion === -1) return [-1, -1];
  let leftIndex = leftBinarySearch(startRegion, endRegion, target, nums);
  let rightIndex = rightBinarySearch(startRegion, endRegion, target, nums);
  return [leftIndex, rightIndex];
};

function leftBinarySearch(start, end, target, nums) {
  const mid = Math.floor((end - start) / 2) + start;
  if (nums[mid] === target && (mid <= 0 || nums[mid - 1] !== nums[mid])) {
    return mid;
  }

  if (nums[mid] === target) {
    return leftBinarySearch(start, mid - 1, target, nums);
  } else {
    return leftBinarySearch(mid + 1, end, target, nums);
  }
}

function rightBinarySearch(start, end, target, nums) {
  const mid = Math.floor((end - start) / 2) + start;
  if (
    nums[mid] === target &&
    (mid + 1 > nums.length - 1 || nums[mid] !== nums[mid + 1])
  ) {
    return mid;
  }

  if (nums[mid] === target) {
    return rightBinarySearch(mid + 1, end, target, nums);
  } else {
    return rightBinarySearch(start, mid - 1, target, nums);
  }
}

let nums = [1, 4];
let target = 4;
console.log(searchRange(nums, target));
