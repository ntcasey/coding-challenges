function getNumberOfIslands(binaryMatrix) {
  // your code goes here

  let count = 0;
  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++) {
      if (binaryMatrix[row][col] !== 0) {
        bfs(row, col, binaryMatrix);
        count += 1;
      }
    }
  }

  return count;
}

function bfs(row, col, grid) {
  let queue = [[row, col]];
  while (queue.length !== 0) {
    let current = queue.shift();
    let neighbors = getNeighbors(current[0], current[1], grid);

    for (let neighbor of neighbors) {
      grid[neighbor[0]][neighbor[1]] = 0;
      queue.push(neighbor);
    }
  }
}

function getNeighbors(row, col, grid) {
  let neighbors = [];
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let direction of directions) {
    if (isValid(row + direction[0], col + direction[1], grid)) {
      neighbors.push([row + direction[0], col + direction[1]]);
    }
  }
  return neighbors;
}

function isValid(row, col, grid) {
  if (
    0 <= row &&
    row < grid.length &&
    0 <= col &&
    col < grid[0].length &&
    grid[row][col] === 1
  ) {
    return true;
  }

  return false;
}
