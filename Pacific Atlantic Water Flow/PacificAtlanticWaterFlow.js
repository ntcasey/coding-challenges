/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if (matrix.length === 0) return [];

  let storage = [...new Array(matrix.length)].map(() =>
    new Array(matrix[0].length).fill(0)
  );
  let pacificStart = [];
  let atlanticStart = [];
  for (let i = 0; i < matrix[0].length; i++) {
    pacificStart.push(`0-${i}`);
    atlanticStart.push(`${matrix.length - 1}-${i}`);
  }

  for (let j = 0; j < matrix.length; j++) {
    pacificStart.push(`${j}-0`);
    atlanticStart.push(`${j}-${matrix[0].length - 1}`);
  }

  for (let cord of pacificStart) {
    let [row, col] = cord.split("-");
    row = Number(row);
    col = Number(col);
    if (storage[row][col] === 0) {
      dfs(matrix, storage, row, col, "pacific");
    }
  }

  for (let cord of atlanticStart) {
    let [row, col] = cord.split("-");
    row = Number(row);
    col = Number(col);
    if (storage[row][col] < 2) {
      dfs(matrix, storage, row, col, "atlantic");
    }
  }

  let final = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (storage[row][col] === 3) {
        final.push([row, col]);
      }
    }
  }

  return final;
};

function dfs(matrix, storage, row, col, way) {
  if (way === "pacific") {
    // mark as visited w. 1
    storage[row][col] = 1;
  } else {
    // mark as visited w. 2 or 3
    storage[row][col] += 2;
  }

  let neighbors = getNeighbors(row, col, matrix, storage, way);
  for (let neighbor of neighbors) {
    let r = neighbor[0];
    let c = neighbor[1];
    if (
      (way === "pacific" && storage[r][c] === 0) ||
      (way === "atlantic" && storage[r][c] < 2)
    )
      dfs(matrix, storage, r, c, way);
  }
}

function getNeighbors(row, col, matrix, storage, way) {
  let result = [];
  if (
    0 <= row - 1 &&
    !hasVisited(row - 1, col, storage, way) &&
    matrix[row - 1][col] >= matrix[row][col]
  ) {
    result.push([row - 1, col]);
  }

  if (
    row + 1 < matrix.length &&
    !hasVisited(row + 1, col, storage, way) &&
    matrix[row + 1][col] >= matrix[row][col]
  ) {
    result.push([row + 1, col]);
  }

  if (
    0 <= col - 1 &&
    !hasVisited(row, col - 1, storage, way) &&
    matrix[row][col - 1] >= matrix[row][col]
  ) {
    result.push([row, col - 1]);
  }

  if (
    col + 1 < matrix[0].length &&
    !hasVisited(row, col + 1, storage, way) &&
    matrix[row][col + 1] >= matrix[row][col]
  ) {
    result.push([row, col + 1]);
  }

  return result;
}

function hasVisited(row, col, storage, way) {
  if (way === "pacific" && storage[row][col] === 1) {
    return true;
  } else {
    if (storage[row][col] === 2 || storage[row][col] === 3) {
      return true;
    }
  }
  return false;
}

let input = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

pacificAtlantic(input);
