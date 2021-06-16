/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
  function helper(start, end) {
    if (start + 1 === end)
      return nums[start] < nums[end] ? nums[start] : nums[end];

    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[end]) {
      return helper(mid, end);
    } else {
      return helper(start, mid);
    }
  }
  return helper(0, nums.length - 1);
}

let w = [11, 13, 15, 17];
console.log(findMin(w));
