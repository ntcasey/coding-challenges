/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.length === 0) return 0;
  
  function binaryHelper(left, right) {
    if (left >= right) {
      if(nums[left] < target) return left+1;
      else return left;
    }
      
    let mid = left + Math.floor((right - left)/2)
    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      return binaryHelper(left, mid-1)
    } else {
      return binaryHelper(mid+1, right)
    }
  }
  
  return binaryHelper(0, nums.length-1)
};