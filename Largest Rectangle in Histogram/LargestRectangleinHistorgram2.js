var largestRectangleArea = function (heights) {
  let leftBorder = getBorder(heights, "left");
  let rightBorder = getBorder(heights, "right");
  let area = 0;
  for (let i = 0; i < heights.length; i++) {
    area = Math.max((rightBorder[i] - leftBorder[i] + 1) * heights[i], area);
  }
  return area;
};

function getBorder(heights, direction) {
  let stack = [];
  let border = [];
  if (direction === "left") {
    for (let i = 0; i < heights.length; i++) {
      getBorderHelper(i, stack, border, heights);
    }
  } else {
    for (let i = heights.length - 1; i >= 0; i--) {
      getBorderHelper(i, stack, border, heights);
    }
  }

  return direction === "left" ? border : border.reverse();
}

function getBorderHelper(i, stack, border, heights) {
  if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
    stack.push(i);
    border.push(i);
    return;
  }

  if (heights[i] <= heights[stack[stack.length - 1]]) {
    let popped = undefined;

    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      popped = stack.pop();
    }
    border.push(popped);
    stack.push(popped);
    stack.push(i);
  }
}
