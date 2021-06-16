/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let current = dfs(i, j, grid);
        if (current > count) count = current;
      }
    }
  }
  return count;
};

function dfs(i, j, grid) {
  if (
    0 <= i &&
    i < grid.length &&
    0 <= j &&
    j < grid[0].length &&
    grid[i][j] === 1
  ) {
    grid[i][j] = 0;

    return (
      1 +
      dfs(i - 1, j, grid) +
      dfs(i + 1, j, grid) +
      dfs(i, j - 1, grid) +
      dfs(i, j + 1, grid)
    );
  }

  return 0;
}

const a = maxAreaOfIsland([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
]);
console.log(a);

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxAreaOfIsland = function (grid) {
//   const dfsPath = new DFS_PATHS(grid);
//   return dfsPath.maxCount;
// };

// class DFS_PATHS {
//   constructor(grid) {
//     this.grid = grid;
//     this.visited = new Set();
//     this.maxCount = 0;
//     this.currentCount = 0;

//     this.TOTAL_I = this.grid.length;
//     this.TOTAL_J = this.grid[0].length;
//     for (let i = 0; i < this.TOTAL_I; i++) {
//       for (let j = 0; j < this.TOTAL_J; j++) {
//         if (
//           this.grid[i][j] === 0 ||
//           this.visited.has(DFS_PATHS.cordToString(i, j))
//         ) {
//           continue;
//         }

//         this.currentCount = 1;
//         this.visited.add(DFS_PATHS.cordToString(i, j));
//         this.dfsPath(DFS_PATHS.cordToString(i, j));

//         if (this.currentCount > this.maxCount) {
//           this.maxCount = this.currentCount;
//         }
//         this.currentCount = 0;
//       }
//     }
//   }

//   dfsPath(cord) {
//     const [i, j] = DFS_PATHS.parseCord(cord);
//     const neighbors = this.getUnVisitedNeighbors(i, j);

//     for (let neighbor of neighbors) {
//       if (!this.visited.has(neighbor)) {
//         this.visited.add(neighbor);
//         this.currentCount++;
//         this.dfsPath(neighbor);
//       }
//     }
//   }

//   maxArea() {
//     return this.maxCount;
//   }

//   static cordToString(i, j) {
//     return `${i}-${j}`;
//   }

//   static parseCord(cord) {
//     let c = cord.split("-");
//     return [Number(c[0]), Number(c[1])];
//   }

//   nonWaterAndNotVisited(i, j) {
//     return (
//       this.grid[i][j] !== 0 && !this.visited.has(DFS_PATHS.cordToString(i, j))
//     );
//   }

//   getUnVisitedNeighbors(i, j) {
//     const adj = [];
//     for (let col of [i + 1, i - 1]) {
//       if (
//         0 <= col &&
//         col < this.TOTAL_I &&
//         this.nonWaterAndNotVisited(col, j)
//       ) {
//         adj.push(DFS_PATHS.cordToString(col, j));
//       }
//     }

//     for (let row of [j + 1, j - 1]) {
//       if (
//         0 <= row &&
//         row < this.TOTAL_J &&
//         this.nonWaterAndNotVisited(i, row)
//       ) {
//         adj.push(DFS_PATHS.cordToString(i, row));
//       }
//     }
//     return adj;
//   }
// }
