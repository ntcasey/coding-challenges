/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") count += dfs(i, j, grid);
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
    grid[i][j] === "1"
  ) {
    grid[i][j] = "0";

    dfs(i - 1, j, grid);
    dfs(i + 1, j, grid);
    dfs(i, j - 1, grid);
    dfs(i, j + 1, grid);

    return 1;
  }

  return 0;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

numIslands(grid);

// var numIslands = function (grid) {
//   const visited = new Set();
//   const island = new BfsIsland(grid, visited);
//   return island.totalIsland();
// };

// class BfsIsland {
//   constructor(grid, visited) {
//     this.grid = grid;
//     this.visited = visited;

//     this.root = 0;

//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[i].length; j++) {
//         //console.log(this.visited)
//         if (grid[i][j] === "0" || this.visited.has(BfsIsland.c(i, j))) continue;

//         this.root += 1;
//         this.visitedBf_Path(i, j);
//       }
//     }
//   }

//   totalIsland() {
//     return this.root;
//   }

//   visitedBf_Path(i, j) {
//     const pos = BfsIsland.c(i, j);
//     this.visited.add(pos);
//     const fringe = [pos];

//     while (fringe.length !== 0) {
//       let current = fringe.shift();

//       let neighbors = this.findNeighbors(current);

//       for (let neighbor of neighbors) {
//         this.visited.add(neighbor);
//         fringe.push(neighbor);
//       }
//     }
//   }

//   static c(i, j) {
//     return `${i}-${j}`;
//   }

//   static e(combine) {
//     let arr = combine.split("-");
//     return [Number(arr[0]), Number(arr[1])];
//   }

//   findNeighbors(position) {
//     let [i, j] = BfsIsland.e(position);
//     const n = [];

//     if (
//       i + 1 < this.grid.length &&
//       j < this.grid[i].length &&
//       this.grid[i + 1][j] === "1" &&
//       !this.visited.has(BfsIsland.c(i + 1, j))
//     ) {
//       n.push(BfsIsland.c(i + 1, j));
//     }
//     if (
//       i < this.grid.length &&
//       j + 1 < this.grid[i].length &&
//       this.grid[i][j + 1] === "1" &&
//       !this.visited.has(BfsIsland.c(i, j + 1))
//     ) {
//       n.push(BfsIsland.c(i, j + 1));
//     }
//     if (
//       0 <= i - 1 &&
//       i - 1 < this.grid.length &&
//       j < this.grid[i - 1].length &&
//       this.grid[i - 1][j] === "1" &&
//       !this.visited.has(BfsIsland.c(i - 1, j))
//     ) {
//       n.push(BfsIsland.c(i - 1, j));
//     }
//     if (
//       0 <= j - 1 &&
//       i < this.grid.length &&
//       j - 1 < this.grid[i].length &&
//       this.grid[i][j - 1] === "1" &&
//       !this.visited.has(BfsIsland.c(i, j - 1))
//     ) {
//       n.push(BfsIsland.c(i, j - 1));
//     }
//     return n;
//   }
// }
