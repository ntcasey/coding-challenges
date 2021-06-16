/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;

  while (m !== 0 && n !== 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[i] = nums2[n - 1];
      n -= 1;
    }
    i -= 1;
  }

  while (n > 0) {
    nums1[i] = nums2[n - 1];
    n -= 1;
    i -= 1;
  }

  return nums1;
};

let nums1 = [4, 5, 6, 0, 0, 0];
let m = 3;
let nums2 = [1, 2, 3];
let n = 3;

console.log(merge(nums1, m, nums2, n));
