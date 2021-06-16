/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 1) return;
  let piviot = locatePiviotIndex(nums);
  if (piviot === -1) {
    // reverse:
    reverse(0, nums.length - 1, nums);
    return;
  }
  let nextGreaterIndex = findNextGreaterNum(piviot, nums);
  swap(piviot, nextGreaterIndex, nums);
  reverse(piviot + 1, nums.length - 1, nums);
};

function findNextGreaterNum(piviot, nums) {
  let numAtPiviot = nums[piviot];

  let i;
  let nextGreaterIndex;
  let nextGreaterNum = Infinity;
  for (i = piviot + 1; i < nums.length; i++) {
    if (numAtPiviot < nums[i] && nums[i] <= nextGreaterNum) {
      nextGreaterNum = nums[i];
      nextGreaterIndex = i;
    }
  }
  return nextGreaterIndex;
}

/* return piviot index, else return -1 */
function locatePiviotIndex(nums) {
  let i = nums.length - 2;
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) return i;
    i--;
  }
  return -1;
}

function reverse(start, end, array) {
  while (start < end) {
    swap(start, end, array);
    start++;
    end--;
  }
}

function swap(i, j, nums) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let nums = [2, 3, 1];
console.log(nextPermutation(nums));
