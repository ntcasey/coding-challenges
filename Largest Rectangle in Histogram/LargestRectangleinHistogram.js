/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let leftBorder = getLeftBorder(heights);
  let rightBorder = getRightBorder(heights);
  let area = 0;
  for (let i = 0; i < heights.length; i++) {
    area = Math.max((rightBorder[i] - leftBorder[i] + 1) * heights[i], area);
  }
  return area;
};

function getLeftBorder(heights) {
  let stack = [];
  let leftBorder = [];
  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i);
      leftBorder.push(i);
      continue;
    }

    if (heights[i] <= heights[stack[stack.length - 1]]) {
      let popped = undefined;

      while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
        popped = stack.pop();
      }
      leftBorder.push(popped);
      stack.push(popped);
      stack.push(i);
    }
  }
  return leftBorder;
}

function getRightBorder(heights) {
  let stack = [];
  let rightBorder = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i);
      rightBorder.push(i);
      continue;
    }

    if (heights[i] <= heights[stack[stack.length - 1]]) {
      let popped = undefined;

      while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
        popped = stack.pop();
      }
      rightBorder.push(popped);
      stack.push(popped);
      stack.push(i);
    }
  }
  return rightBorder.reverse();
}

largestRectangleArea([0, 0]);
