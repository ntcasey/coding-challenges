/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [3, 4, 5, 6, 7, 8, 1, 2];
let target = 2;
var search = function (nums, target) {
  if (nums.length === 0) return -1;

  function helper(lo, hi) {
    if (lo >= hi) {
      if (nums[lo] !== target) return -1;
    }
    // find mid point
    let mid = lo + Math.floor((hi - lo) / 2);
    // check if nums is at middle;
    if (nums[mid] === target) return mid;
    // look left side
    let left_low = lo;
    let left_hi = mid - 1;
    let right_low = mid + 1;
    let right_hi = hi;

    if (mid === left_low) left_hi = mid;

    // is it low to high
    if (nums[left_low] < nums[left_hi]) {
      // true is it in the range
      if (nums[left_low] <= target && target <= nums[left_hi]) {
        // yes then bin search on this side
        return helper(left_low, left_hi);
      } else {
        // search other side (right side search)
        return helper(right_low, right_hi);
      }
    } else if (nums[left_low] > nums[left_hi]) {
      // here is when range is hi to lo
      // true is it in the range

      if (nums[right_low] <= target && target <= nums[right_hi]) {
        // yes then bin search on this side
        return helper(right_low, right_hi);
      } else {
        // search other side (right side search)
        return helper(left_low, left_hi);
      }
    } else {
      let left = helper(left_low, left_hi);
      // helper(right_low, right_low)

      return left !== -1 ? left : helper(right_low, right_hi);
    }
  }
  return helper(0, nums.length - 1);
};
let res = search(nums, target);

console.log(res);
