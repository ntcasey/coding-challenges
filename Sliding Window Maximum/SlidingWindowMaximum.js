/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i]);

    if (i >= k - 1) {
      result.push(queue[0]);

      if (nums[i - k + 1] === queue[0]) queue.shift();
    }
  }

  return result;
};

let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 10, 10, 10];
let k = 6;
console.log(maxSlidingWindow(nums, k));

/*
let nums = [1, 3, -3, -1, -5, 3, 6, 7];
           [       1, -1, -9, ]
           [                   ]

max = 
mapMax = {
 -1: 1 
 -3: 1
 -5: 1
}



*/

// var maxSlidingWindow = function (nums, k) {
//   let max;
//   let count = 0;
//   let result = [];
//   let queue = [];
//   for (let i = 0; i < nums.length; i++) {
//     let current = nums[i];
//     if (!max || current > max) max = current;
//     while (queue.length > 0 && current > queue[queue.length - 1]) {
//       queue.pop();
//     }
//     queue.push(current);
//     count++;

//     if (count === k) {
//       result.push(max);
//       let remove = nums[i - k + 1];
//       if (remove === max) {
//         queue.shift();
//         max = queue[0];
//       }
//       count--;
//     }
//   }
//   return result;
// };
