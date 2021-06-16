var exist = function (board, word) {
  const directions = [
    [0, -1], // left
    [-1, 0], // down
    [1, 0], // up
    [0, 1], // right
  ];

  function dfs(row, col, word, index) {
    if (board[row][col] !== word[index]) return false;
    if (index === word.length - 1) return true;

    board[row][col] = "*";
    for (let d of directions) {
      if (
        row + d[0] < 0 ||
        row + d[0] > board.length - 1 ||
        col + d[1] < 0 ||
        col + d[1] > board[0].length - 1
      )
        continue;

      if (dfs(row + d[0], col + d[1], word, index + 1)) {
        return true;
      }
    }

    board[row][col] = word[index];
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (dfs(row, col, word, 0)) return true;
    }
  }
  return false;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCESEEEFD";

let r = exist(board, word);
console.log(r);
