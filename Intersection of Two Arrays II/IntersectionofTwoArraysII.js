/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let larger, smaller;
  if (nums1.length > nums2.length) {
    larger = nums1;
    smaller = nums2;
  } else {
    larger = nums2;
    smaller = nums1;
  }

  if (smaller.length * smaller.length <= larger.length) {
    let intersection = [];
    let i = 0;
    while (i < smaller.length) {
      if (binarySearch(smaller[i], larger)) {
        intersection.push(smaller[i]);
      }

      i++;
    }
    return intersection;
  }

  return twoPointerMethod(nums1, nums2);
};

function twoPointerMethod(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let intersection = [];
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      intersection.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  while (p1 < nums1.length) {
    intersection.push(nums1[p1]);
    p1++;
  }

  while (p2 < nums2.length) {
    intersection.push(nums2[p2]);
    p2++;
  }

  return intersection;
}

function binarySearch(target, arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

intersect(nums1, nums2);

/*
num1.length = n
num2.lenght = n^2
*/

// I think the goal of this question is to test whether the interview understands some of the data engineering techniques. From a data engineer's perspective, basically there are three ideas to solve the question:

// Store the two strings in distributed system(whether self designed or not), then using MapReduce technique to solve the problem;

// Processing the Strings by chunk, which fits the memory, then deal with each chunk of data at a time;

// Processing the Strings by streaming, then check.
