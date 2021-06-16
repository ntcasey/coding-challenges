/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let largest = -Infinity;
  while (start !== end) {
    let currentTotal = (end - start) * Math.min(height[start], height[end]);
    largest = Math.max(largest, currentTotal);

    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return largest;
};

let height = [1, 2, 7, 2];
maxArea(height);
