/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let aux = 1;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (row === 0 && matrix[row][col] === 0) {
        aux = 0;
        continue;
      }

      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let col = 1; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) setColToZero(col, matrix);
  }

  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) setRowToZero(row, matrix);
  }

  if (matrix[0][0] === 0) setColToZero(0, matrix);
  if (aux === 0) setRowToZero(0, matrix);
};

function setRowToZero(row, matrix) {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
}

function setColToZero(col, matrix) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
}
