/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }

  for (let j = 1; j < grid.length; j++) {
    grid[j][0] = grid[j][0] + grid[j - 1][0];
  }

  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      let min = Math.min(grid[row][col - 1], grid[row - 1][col]);
      grid[row][col] = grid[row][col] + min;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
