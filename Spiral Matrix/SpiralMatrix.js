/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // coordinates: [i, j]
  let topLeft = [0, 0];
  let topRight = [0, matrix[0].length - 1];
  let bottomRight = [matrix.length - 1, matrix[0].length - 1];
  let bottomLeft = [matrix.length - 1, 0];

  let result = [];
  while (topLeft[0] <= bottomRight[0] && topLeft[1] < bottomRight[1]) {
    if (topLeft[1] === bottomRight[1] && topLeft[0] === bottomRight[0]) {
      // get center
      result.push(matrix[topLeft[0]][topLeft[1]]);
      break;
    }

    if (topLeft[1] === bottomRight[1]) {
      // all elements top to bottom
      pushRightElement(topRight, bottomRight, matrix, result, false);
      break;
    }
    if (topLeft[0] === bottomRight[0]) {
      // all elements left to right
      pushTopElement(topLeft, topRight, matrix, result, false);
      break;
    }

    pushTopElement(topLeft, topRight, matrix, result);
    pushRightElement(topRight, bottomRight, matrix, result);
    pushBottomElement(bottomRight, bottomLeft, matrix, result);
    pushLeftElement(bottomLeft, topLeft, matrix, result);

    topLeft = [topLeft[0] + 1, topLeft[1] + 1];
    topRight = [topRight[0] + 1, topRight[1] - 1];
    bottomRight = [bottomRight[0] - 1, bottomRight[1] - 1];
    bottomLeft = [bottomLeft[0] - 1, bottomLeft[1] + 1];
  }

  return result;
};

// push top elements of perimeter into result
// from left to right
function pushTopElement(topLeft, topRight, matrix, result, popLast = true) {
  let row = topLeft[0];
  for (let col = topLeft[1]; col <= topRight[1]; col++) {
    result.push(matrix[row][col]);
  }

  if (popLast) result.pop();
}

// push right side elements of perimeter into result
// from top to bottom
function pushRightElement(
  topRight,
  bottomRight,
  matrix,
  result,
  popLast = true
) {
  let col = topRight[1];
  for (let row = topRight[0]; row <= bottomRight[0]; row++) {
    result.push(matrix[row][col]);
  }

  if (popLast) result.pop();
}

// push bottom  elements of perimeter into result
// from left to right
function pushBottomElement(bottomRight, bottomLeft, matrix, result) {
  let row = bottomRight[0];
  for (let col = bottomRight[1]; col >= bottomLeft[1]; col--) {
    result.push(matrix[row][col]);
  }

  result.pop();
}

// push left elements of perimeter into result
// from bottom to top
function pushLeftElement(bottomLeft, topLeft, matrix, result) {
  let col = bottomLeft[1];
  for (let row = bottomLeft[0]; row >= topLeft[0]; row--) {
    result.push(matrix[row][col]);
  }

  result.pop();
}

let matrix = [
  [1, 11],
  [2, 12],
  [3, 13],
  [4, 14],
  [5, 15],
  [6, 16],
  [7, 17],
  [8, 18],
  [9, 19],
  [10, 20],
];

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
console.log(spiralOrder(matrix));
