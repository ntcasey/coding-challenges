/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let set1 = {};
  let set2 = {};
  let set3 = {};
  let chunk = {};

  let v1, v2, v3;
  for (let blockRow = 0; blockRow < 9; blockRow += 3) {
    for (let col = 0; col < 9; col++) {
      if (col === 0 || col === 3 || col === 6) {
        reset(chunk);
      }

      v1 = board[blockRow][col];
      v2 = board[blockRow + 1][col];
      v3 = board[blockRow + 2][col];

      if (
        v1 in set1 ||
        v1 in chunk ||
        v2 in set2 ||
        v2 in chunk ||
        v3 in set3 ||
        v3 in chunk
      ) {
        return false;
      } else {
        if (v1 !== ".") {
          set1[v1] = true;
          chunk[v1] = true;
        }
        if (v2 !== ".") {
          set2[v2] = true;
          chunk[v2] = true;
        }
        if (v3 !== ".") {
          set3[v3] = true;
          chunk[v3] = true;
        }
      }
    }
    reset(set1);
    reset(set2);
    reset(set3);
  }

  for (let col = 0; col < 9; col += 3) {
    for (let row = 0; row < 9; row++) {
      v1 = board[row][col];
      v2 = board[row][col + 1];
      v3 = board[row][col + 2];

      if (v1 in set1 || v2 in set2 || v3 in set3) {
        return false;
      } else {
        if (v1 !== ".") set1[v1] = true;
        if (v2 !== ".") set2[v2] = true;
        if (v3 !== ".") set3[v3] = true;
      }
    }
    reset(set1);
    reset(set2);
    reset(set3);
  }
  return true;
};

function reset(m) {
  for (let property in m) {
    delete m[property];
  }
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
