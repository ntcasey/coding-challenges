/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const leftBoundry = computeLeftBoundry(height);
  const rightBoundry = computeRightBoundry(height);
  return computeArea(leftBoundry, rightBoundry);
};

function computeLeftBoundry(height) {
  const stack = [];
  const leftBoundry = new Array(height.length);
  for (let i = 0; i < height.length; i++) {
    if (stack.length && height[i] > height[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length === 0) {
      leftBoundry[i] = 0;
      if (height[i] !== 0) stack.push(i);
    } else {
      // less than:
      const difference = height[stack[stack.length - 1]] - height[i];
      leftBoundry[i] = difference;
    }
  }

  return leftBoundry;
}

function computeRightBoundry(height) {
  const stack = [];
  const rightBoundry = new Array(height.length);
  for (let i = height.length - 1; i >= 0; i--) {
    if (stack.length && height[i] > height[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length === 0) {
      //rightBoundry.push(0);
      rightBoundry[i] = 0;
      if (height[i] !== 0) stack.push(i);
    } else {
      // less than:
      const difference = height[stack[stack.length - 1]] - height[i];
      rightBoundry[i] = difference;
    }
  }

  return rightBoundry;
}

function computeArea(leftBoundry, rightBoundry) {
  let area = 0;
  for (let i = 0; i < leftBoundry.length; i++) {
    area += Math.min(leftBoundry[i], rightBoundry[i]);
  }
  return area;
}

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap(height));

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
//  var trap = function (height) {
//   const leftBoundry = computeLeftBoundry(height);
//   const rightBoundry = computeRightBoundry(height);
//   return computeArea(leftBoundry, rightBoundry);
// };

// function computeLeftBoundry(height) {
//   const stack = [];
//   const leftBoundry = [];
//   for (let i = 0; i < height.length; i++) {
//     if (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     if (stack.length === 0) {
//       leftBoundry.push(0);
//       if (height[i] !== 0) stack.push(i);
//     } else {
//       // less than:
//       const difference = height[stack[stack.length - 1]] - height[i];
//       leftBoundry.push(difference);
//     }
//   }

//   return leftBoundry;
// }

// function computeRightBoundry(height) {
//   const stack = [];
//   const rightBoundry = [];
//   for (let i = height.length - 1; i >= 0; i--) {
//     if (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     if (stack.length === 0) {
//       rightBoundry.unshift(0);
//       if (height[i] !== 0) stack.push(i);
//     } else {
//       // less than:
//       const difference = height[stack[stack.length - 1]] - height[i];
//       rightBoundry.unshift(difference);
//     }
//   }

//   return rightBoundry;
// }

// function computeArea(leftBoundry, rightBoundry) {
//   let area = 0;
//   for (let i = 0; i < leftBoundry.length; i++) {
//     area += Math.min(leftBoundry[i], rightBoundry[i]);
//   }
//   return area;
// }
