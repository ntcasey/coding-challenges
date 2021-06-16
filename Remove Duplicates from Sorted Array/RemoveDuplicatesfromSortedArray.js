/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let i = 1;
//   let count = 0;
//   while (i < nums.length) {
//     if (nums[i - 1] === nums[i]) {
//       count += 1;
//       for (let j = i; j >= count; j--) {
//         let temp = nums[j];
//         nums[j] = nums[j - 1];
//         nums[j - 1] = temp;
//       }
//     }
//     i++;
//   }

//   for (let i = 0; i < count; i++) {
//     nums.shift();
//   }
// };

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
