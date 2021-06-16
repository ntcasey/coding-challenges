/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let turtose = 0;
  let hare = 0;
  let flag = true;
  while (flag || nums[hare] !== nums[turtose]) {
    flag = false;
    turtose = nums[turtose];
    hare = nums[nums[hare]];
  }

  hare = 0;
  while (hare !== turtose) {
    turtose = nums[turtose];
    hare = nums[hare];
  }

  return hare;
};

// function shuffleElements(arr) {
//   if (arr.length === 2) return;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] === i) {
//       if (arr[i - 1] !== i) {
//         swap(i, i - 1, arr);
//       } else {
//         swap(i, i + 1, arr);
//       }
//     }
//   }

//   let last = arr.length - 1;
//   if (arr[last] === last) {
//     if (arr[last - 1] !== last) {
//       swap(last, last - 1, arr);
//     } else {
//       swap(last, 0, arr);
//     }
//   }
// }

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
