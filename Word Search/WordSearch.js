var exist = function (board, word) {
  return new DFSFinder(board, word).found;
};

class DFSFinder {
  constructor(board, word) {
    this.board = board;
    this.word = word;
    this.found = false;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.finder(i, j, this.word)) {
          this.found = true;
          break;
        }
      }
    }
  }

  finder(i, j, w, visited = {}) {
    if (w.length === 1 && this.board[i][j] === w[0]) return true;

    let firstChar = w[0];
    if (firstChar !== this.board[i][j]) {
      return false;
    }

    let k = `${i}-${j}`;
    visited[k] = true;

    let children = this.getChildren(i, j);
    for (let child of children) {
      let p = `${child[0]}-${child[1]}`;
      if (visited[p]) {
        continue;
      }

      if (this.finder(child[0], child[1], w.substring(1), visited)) {
        return true;
      }
    }

    delete visited[k];
  }

  getChildren(i, j) {
    const cord = [];
    if (0 <= i - 1) {
      cord.push([i - 1, j]);
    }

    if (i + 1 < this.board.length) {
      cord.push([i + 1, j]);
    }

    if (0 <= j - 1) {
      cord.push([i, j - 1]);
    }

    if (j + 1 < this.board[0].length) {
      cord.push([i, j + 1]);
    }

    return cord;
  }
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCESEEEFS";

let r = exist(board, word);
console.log(r);
