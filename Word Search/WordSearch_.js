var exist = function (board, word) {
  let visited = new Set();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (dfs(board, row, col, word, 0, visited)) return true;
    }
  }
  return false;
};

function dfs(board, row, col, word, index, visited) {
  if (
    row < 0 ||
    row > board.length - 1 ||
    col < 0 ||
    col > board[0].length - 1
  ) {
    return false;
  }
  if (board[row][col] !== word[index]) return false;
  if (visited.has(`${row}-${col}`)) return false;
  if (index === word.length - 1) return true;

  visited.add(`${row}-${col}`);
  const directions = [
    [-1, 0], // down
    [1, 0], // up
    [0, -1], // left
    [0, 1], // right
  ];

  for (let d of directions) {
    if (dfs(board, row + d[0], col + d[1], word, index + 1, visited)) {
      return true;
    }
  }
  visited.delete(`${row}-${col}`);
  return false;
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCESEEEFD";

let r = exist(board, word);
console.log(r);
