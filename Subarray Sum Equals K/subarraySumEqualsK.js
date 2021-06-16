// var subarraySum = function (nums, k) {
//   if (nums.length === 0) return 0;

//   let i = 0;
//   let j = 0;
//   let count = 0;
//   const map = {};

//   function rangeSum(i, j) {
//     if (i === j) {
//       map[`${i}-${j}`] = nums[i];
//       return map[`${i}-${j}`];
//     } else {
//       if (map[`${i}-${j - 1}`] !== undefined) {
//         map[`${i}-${j}`] = map[`${i}-${j - 1}`] + nums[j];
//         return map[`${i}-${j}`];
//       } else {
//         let sum = 0;
//         for (let temp = i; temp <= j; temp++) {
//           sum += nums[temp];
//         }
//         return sum;
//       }
//     }
//   }

//   while (j < nums.length) {
//     let sum = rangeSum(i, j);
//     if (sum === k) {
//       count += 1;
//       i += 1;
//       j += 1;
//     } else if (sum > k && i == j) {
//       i += 1;
//       j += 1;
//     } else if (sum > k) {
//       i += 1;
//     } else {
//       j += 1;
//     }
//   }
//   return count;
// };

var subarraySum = function (nums, k) {};

let nums = [-1, -1, 1];
let k = 0;
let result = subarraySum(nums, k);
console.log(result);
