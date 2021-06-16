/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let boardMap = {};
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let cord = `${row}-${col}`;
      let numNeighbors = numberLiveNeighbors([row, col], board);
      if (board[row][col] === 1) {
        if (numNeighbors < 2 || numNeighbors > 3) {
          boardMap[cord] = 0;
        } else {
          // numNeighbors === 2 || numNeighbors === 3
          boardMap[cord] = 1;
        }
      } else {
        if (numNeighbors === 3) {
          boardMap[cord] = 1;
        } else {
          boardMap[cord] = 0;
        }
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      board[row][col] = boardMap[`${row}-${col}`];
    }
  }
};

function numberLiveNeighbors(pos, board) {
  let [row, col] = pos;
  let numNeighbors = 0;
  if (0 <= row - 1) {
    numNeighbors += board[row - 1][col];
    if (0 <= col - 1) {
      numNeighbors += board[row - 1][col - 1];
    }

    if (col + 1 <= board[0].length - 1) {
      numNeighbors += board[row - 1][col + 1];
    }
  }

  if (0 <= col - 1) {
    numNeighbors += board[row][col - 1];
  }

  if (col + 1 <= board[0].length - 1) {
    numNeighbors += board[row][col + 1];
  }

  if (row + 1 <= board.length - 1) {
    numNeighbors += board[row + 1][col];
    if (0 <= col - 1) {
      numNeighbors += board[row + 1][col - 1];
    }

    if (col + 1 <= board[0].length - 1) {
      numNeighbors += board[row + 1][col + 1];
    }
  }
  return numNeighbors;
}

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.

// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

let board = [
  [1, 1],
  [1, 0],
];
console.log(gameOfLife(board));
