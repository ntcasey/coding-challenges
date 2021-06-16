/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let g = new DFSboard(board);

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === "O" && !g.contains(row, col)) {
        board[row][col] = "X";
      }
    }
  }
};

class DFSboard {
  constructor(board) {
    this.visited = new Set();
    this.board = board;

    let firstRow = 0;
    let lastRow = this.board.length - 1;
    for (let col = 0; col < this.board[0].length; col++) {
      if (this.board[firstRow][col] === "O" && !this.contains(firstRow, col)) {
        this.dfsPaths(firstRow, col);
      }

      if (this.board[lastRow][col] === "O" && !this.contains(lastRow, col)) {
        this.dfsPaths(lastRow, col);
      }
    }

    let firstCol = 0;
    let lastCol = this.board[0].length - 1;
    for (let row = 0; row < this.board.length; row++) {
      if (this.board[row][firstCol] === "O" && !this.contains(row, firstCol)) {
        this.dfsPaths(row, firstCol);
      }

      if (this.board[row][lastCol] === "O" && !this.contains(row, lastCol)) {
        this.dfsPaths(row, lastCol);
      }
    }
  }

  dfsPaths(row, col) {
    this.visited.add(`${row}-${col}`);
    let children = this.getChildren(row, col);
    for (let child of children) {
      this.dfsPaths(child[0], child[1]);
    }
  }

  getChildren(row, col) {
    let children = [];
    if (
      0 <= row - 1 &&
      !this.contains(row - 1, col) &&
      this.isO(row - 1, col)
    ) {
      children.push([row - 1, col]);
    }
    if (
      row + 1 < this.board.length &&
      !this.contains(row + 1, col) &&
      this.isO(row + 1, col)
    ) {
      children.push([row + 1, col]);
    }

    if (
      0 <= col - 1 &&
      !this.contains(row, col - 1) &&
      this.isO(row, col - 1)
    ) {
      children.push([row, col - 1]);
    }

    if (
      col + 1 < this.board[0].length &&
      !this.contains(row, col + 1) &&
      this.isO(row, col + 1)
    ) {
      children.push([row, col + 1]);
    }

    return children;
  }

  isO(row, col) {
    return this.board[row][col] === "O";
  }

  contains(row, col) {
    return this.visited.has(`${row}-${col}`);
  }
}

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

solve(board);
