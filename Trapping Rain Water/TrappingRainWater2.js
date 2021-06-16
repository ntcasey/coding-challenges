/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 2) return 0;

  let maxLeftBorder = height[0];
  let maxRightBorder = height[height.length - 1];
  let start = 1;
  let end = height.length - 2;
  let totalWater = 0;

  while (start <= end) {
    if (maxLeftBorder <= maxRightBorder) {
      if (height[start] < maxLeftBorder) {
        totalWater += maxLeftBorder - height[start];
      } else {
        // if maxLeftBorder = height @ current start position
        // maxLeftBorder will get reassigned to same number
        maxLeftBorder = height[start];
      }
      start++;
    } else {
      if (height[end] < maxRightBorder) {
        totalWater += maxRightBorder - height[end];
      } else {
        // same idea of maxLeftBorder
        maxRightBorder = height[end];
      }
      end--;
    }
  }

  return totalWater;
};
