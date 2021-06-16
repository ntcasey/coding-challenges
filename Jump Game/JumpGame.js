/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  let highest = nums[0];
  if (highest >= nums.length - 1) return true;
  for (let i = 0; i < nums.length; i++) {
    if (highest >= i && highest < i + nums[i]) {
      highest = i + nums[i];
      if (highest >= nums.length - 1) return true;
    }

    if (highest <= i) return false;
  }
};

let nums = [1, 2, 3];
console.log(canJump(nums));

// var canJump = function (nums) {
//   let memo = {};
//   function jumpHelper(index) {
//     if (index === nums.length - 1) return true;
//     if (index > nums.length - 1) return false;
//     if (index in memo) return false;

//     let numJump = nums[index];
//     for (let i = numJump; i >= 1; i--) {
//       let result = jumpHelper(index + i);
//       if (result) return true;
//     }
//     memo[index] = true;

//     return false;
//   }
//   return jumpHelper(0);
// };
