/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  if (board.length === 0) return 0;

  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "X") {
        if (i > 0 && board[i - 1][j] === "X") continue;
        if (j > 0 && board[i][j - 1] === "X") continue;

        count += 1;
      }
    }
  }

  return count;
};
