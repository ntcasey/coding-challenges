/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 1) return 1;

  let len = [1];
  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let highest = [];
    for (let j = 0; j < i; j++) {
      if (nums[j] < currentNum) {
        highest.push(len[j]);
      }
    }
    highest.length !== 0 ? len.push(Math.max(...highest) + 1) : len.push(1);
  }
  return Math.max(...len);
};

let nums = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums));
