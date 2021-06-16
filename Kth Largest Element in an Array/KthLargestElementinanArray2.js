/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let target = nums.length - k;
  let start = 0;
  let end = nums.length - 1;
  while (true) {
    let piviot = partitian(start, end, nums);
    if (piviot === target) return nums[piviot];
    if (piviot > target) {
      end = piviot - 1;
    } else {
      start = piviot + 1;
    }
  }
};

function partitian(start, end, nums) {
  let piviot = nums[end];
  let i = start;
  for (let traveller = start; traveller <= end - 1; traveller++) {
    if (nums[traveller] <= piviot) {
      swap(i, traveller, nums);
      i += 1;
    }
  }
  swap(i, end, nums);
  return i;
}

function swap(i, j, nums) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
findKthLargest(nums, k);

// 2nd largest = 5 - 3 = 2

// 5 10 3 2 8

//   i
//     j

// 5 3 10 2 8
//     i
//        j

// 5 3 2 8 10
//       i

// return i = 3

// since 2 is less than 3
// search on left
// 0 - 2

// 5 3 2
// i
//   j

// 2 3 5

// return i = 0

// 20 3 10 2 10
// i
//    j

// 3 20 10 2 10
//   i
//      j
