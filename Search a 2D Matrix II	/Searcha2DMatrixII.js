/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let col = matrix[0].length - 1;
  let row = 0;

  while (row <= matrix.length - 1 && 0 <= col) {
    if (matrix[row][col] === target) return true;

    // check if bottom exist
    if (isValid(row + 1, col)) {
      if (isValid(row, col - 1)) {
        if (target <= matrix[row][col - 1]) {
          // target is less/equal than left box
          col -= 1;
        } else {
          // if target is between left and bottom box OR
          // target is greater than bottom
          row += 1;
        }
      } else {
        row += 1;
      }
    } else {
      if (!isValid(row, col - 1) || matrix[row][col - 1] < target) {
        return false;
      }
      col -= 1;
    }
  }
  return false;
};

function isValid(row, col) {
  if (0 <= row && 0 <= col) {
    return true;
  }

  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

let target = 20;
searchMatrix(matrix, target);

// var searchMatrix = function (matrix, target) {
//   return traverseRight(matrix, target) || traverseDown(matrix, target);
// };

// function traverseRight(matrix, target) {
//   let col = 0;
//   let row = 0;

//   while (true) {
//     if (matrix[row][col] === target) {
//       return true;
//     } else if (isValid(row, col + 1, matrix, target)) {
//       col += 1;
//     } else if (isValid(row + 1, col, matrix, target)) {
//       row += 1;
//     } else {
//       return false;
//     }
//   }
// }

// function traverseDown(matrix, target) {
//   let row = 0;
//   let col = 0;

//   while (true) {
//     if (matrix[row][col] === target) {
//       return true;
//     } else if (isValid(row + 1, col, matrix, target)) {
//       col += 1;
//     } else if (isValid(row, col + 1, matrix, target)) {
//       row += 1;
//     } else {
//       return false;
//     }
//   }
// }

// function isValid(row, col, matrix, target) {
//   if (
//     row < matrix.length &&
//     col < matrix[0].length &&
//     target <= matrix[row][col]
//   ) {
//     return true;
//   }

//   return false;
// }

// var searchMatrix = function (matrix, target) {
//   // binary search col:
//   let result1 = binarySearchMatrix(0, matrix, target, "col");
//   console.log(result1);
//   // binary search row:
//   let result2 = binarySearchMatrix(0, matrix, target, "row");
//   console.log(result2);
//   if (result1[1] || result2[1]) return true;

//   let searchRow = binarySearchMatrix(result1[0], matrix, target, "row");
//   let searchCol = binarySearchMatrix(result2[0], matrix, target, "col");

//   return searchRow[1] || searchCol[1];
// };

// // given row/col , return index of element or lowest index
// // Ex:
// //    [index, true]   -> found
// //    [index, false]  -> not found, but could be found in possible row
// function binarySearchMatrix(fixed, matrix, target, way) {
//   let start = 0;
//   let end = way === "col" ? matrix[0].length - 1 : matrix.length - 1;
//   let endd = end;
//   let mid;

//   while (start <= end) {
//     mid = Math.floor((end - start) / 2) + start;
//     console.log(mid);
//     if (computeMatrixVal(fixed, mid, way) === target) return [mid, true];

//     if (computeMatrixVal(fixed, mid, way) > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   if (start > endd) start = start - 1;
//   return computeMatrixVal(fixed, start, way) < target
//     ? [start, false]
//     : [start - 1, false];
// }

// function computeMatrixVal(fixed, index, way) {
//   if (way === "col") return matrix[fixed][index];
//   if (way === "row") return matrix[index][fixed];
// }
