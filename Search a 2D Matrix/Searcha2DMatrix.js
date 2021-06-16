/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (target < matrix[0][0]) return false;
  let startRow = 0;
  let endRow = matrix.length - 1;
  let pinPointRow = topDownBinarySearch(startRow, endRow, matrix, target);
  //console.log(pinPointRow);
  if (pinPointRow === "found") return true;

  return binarySearchMatrix(
    pinPointRow,
    0,
    matrix[0].length - 1,
    matrix,
    target
  );
};

function binarySearchMatrix(row, start, end, matrix, target) {
  if (start > end) return false;

  let mid = Math.floor((end - start) / 2) + start;
  let returnTarget = matrix[row][mid];
  if (returnTarget === target) {
    return true;
  } else if (returnTarget < target) {
    return binarySearchMatrix(row, mid + 1, end, matrix, target);
  } else {
    return binarySearchMatrix(row, start, mid - 1, matrix, target);
  }
}

function topDownBinarySearch(start, end, matrix, target) {
  let mid = Math.floor((end - start) / 2) + start;
  if (target === matrix[mid][0]) return "found";
  if (start === end) return start;

  if (target > matrix[mid][0] && matrix[mid + 1][0] > target) return mid;
  if (target > matrix[mid][0]) {
    return topDownBinarySearch(mid + 1, end, matrix, target);
  } else {
    return topDownBinarySearch(start, end - 1, matrix, target);
  }
}

let matrix = [[1, 3]];
let target = 3;

console.log(searchMatrix(matrix, target));
