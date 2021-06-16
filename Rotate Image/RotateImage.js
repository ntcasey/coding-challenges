/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let I = [0, 0];
  let J = [0, matrix[0].length - 1];
  let K = [matrix.length - 1, matrix[0].length - 1];
  let L = [matrix.length - 1, 0];

  // 00  01
  // 10  11
  let leftBoundry = I[1];
  let rightBoundry = J[1];
  let moving_I, moving_J, moving_K, moving_L;
  while (leftBoundry < rightBoundry) {
    moving_I = [...I];
    moving_J = [...J];
    moving_K = [...K];
    moving_L = [...L];
    borderRotate(moving_I, moving_J, moving_K, moving_L, rightBoundry, matrix);

    I = [I[0] + 1, I[1] + 1];
    J = [J[0] + 1, J[1] - 1];
    K = [K[0] - 1, K[1] - 1];
    L = [L[0] - 1, L[1] + 1];

    leftBoundry = I[1];
    rightBoundry = J[1];
  }
};

function borderRotate(i, j, k, l, rightBoundry, matrix) {
  while (i[1] < rightBoundry) {
    swap(i, j, matrix);
    swap(i, k, matrix);
    swap(i, l, matrix);

    i = [i[0], i[1] + 1];
    j = [j[0] + 1, j[1]];
    k = [k[0], k[1] - 1];
    l = [l[0] - 1, l[1]];
  }
}

function swap(cord1, cord2, matrix) {
  let temp = matrix[cord1[0]][cord1[1]];
  matrix[cord1[0]][cord1[1]] = matrix[cord2[0]][cord2[1]];
  matrix[cord2[0]][cord2[1]] = temp;
}

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

rotate(matrix);
