/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let value;
  let max = 0;
  let memo = {}; // map
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      value = dfs(matrix, row, col, memo, -1);
      if (value > max) max = value;
    }
  }

  return max;
};

function dfs(matrix, row, col, memo, previousVal) {
  if (!isValid(matrix, row, col, previousVal)) {
    return 0;
  }
  if (`${row}-${col}` in memo) return memo[`${row}-${col}`];

  let maxValue = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (direction of directions) {
    let current = dfs(
      matrix,
      row + direction[0],
      col + direction[1],
      memo,
      matrix[row][col]
    );

    if (current > maxValue) maxValue = current;
  }

  memo[`${row}-${col}`] = maxValue + 1;
  return memo[`${row}-${col}`];
}

function isValid(matrix, row, col, previousVal) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    previousVal >= matrix[row][col]
  ) {
    return false;
  }

  return true;
}

let matrix = [
  [3, 4, 5],
  [3, 2, 6],
  [2, 2, 1],
];

longestIncreasingPath(matrix);
