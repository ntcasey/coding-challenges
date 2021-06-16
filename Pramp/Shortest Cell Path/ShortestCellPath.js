function shortestCellPath(grid, sr, sc, tr, tc) {
  /**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

  //your code goes here
  return bfs(sr, sc, tr, tc, grid);
}

function bfs(row, col, tr, tc, grid) {
  let fringe = [[row, col, 0]];
  let visited = {};
  visited[`${row}-${col}`] = true;

  while (fringe.length !== 0) {
    let current = fringe.shift();
    if (tr === current[0] && tc === current[1]) return current[2];
    let neighbors = getValidNeighbors(
      current[0],
      current[1],
      grid,
      visited,
      current[2]
    );
    for (let neighbor of neighbors) {
      fringe.push(neighbor);
      visited[`${neighbor[0]}-${neighbor[1]}`] = true;
    }
  }
  return -1;
}

function getValidNeighbors(row, col, grid, visited, depth) {
  let neighbors = [];
  let parameter = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let param of parameter) {
    if (isValid(row + param[0], col + param[1], grid, visited)) {
      neighbors.push([row + param[0], col + param[1], depth + 1]);
    }
  }
  return neighbors;
}

function isValid(row, col, grid, visited) {
  if (
    row >= 0 &&
    row < grid.length &&
    col >= 0 &&
    col < grid[0].length &&
    grid[row][col] === 1 &&
    !visited[`${row}-${col}`]
  )
    return true;

  return false;
}

let grid = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 0, 1, 1],
];
let sr = 0,
  sc = 0,
  tr = 2,
  tc = 0;
console.log(shortestCellPath(grid, sr, sc, tr, tc));

// function shortestCellPath(grid, sr, sc, tr, tc) {
//   /**
// 	@param grid: integer[][]
// 	@param sr: integer
// 	@param sc: integer
// 	@param tr: integer
// 	@param tc: integer
// 	@return: integer
// 	*/

//   //your code goes here
//   return dfs(sr, sc, tr, tc, grid);
// }

// function dfs(row, col, tr, tc, grid, visited = {}) {
//   if (row === tr && col === tc) return 0;

//   let shortest = [];
//   let neighbors = getValidNeighbors(row, col, grid, visited);
//   if (neighbors.length === 0) {
//     return -1;
//   }

//   visited[`${row}-${col}`] = true;
//   for (let neighbor of neighbors) {
//     let sum = dfs(neighbor[0], neighbor[1], tr, tc, grid, visited);
//     if (sum !== -1) {
//       shortest.push(sum + 1);
//     }
//   }
//   delete visited[`${row}-${col}`];

//   if (shortest.length !== 0) return Math.min(...shortest);
//   return -1;
// }

// function getValidNeighbors(row, col, grid, visited) {
//   let neighbor = [];
//   let parameter = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];
//   for (let param of parameter) {
//     if (isValid(row + param[0], col + param[1], grid, visited)) {
//       neighbor.push([row + param[0], col + param[1]]);
//     }
//   }
//   return neighbor;
// }

// function isValid(row, col, grid, visited) {
//   if (
//     row >= 0 &&
//     row < grid.length &&
//     col >= 0 &&
//     col < grid[0].length &&
//     grid[row][col] === 1 &&
//     !visited[`${row}-${col}`]
//   )
//     return true;

//   return false;
// }
