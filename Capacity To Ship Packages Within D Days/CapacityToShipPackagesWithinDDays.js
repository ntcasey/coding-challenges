/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  let min = Math.max(...weights);
  let max = weights.reduce((a, b) => a + b, 0);
  return binarySearch(weights, min, max, D);
};

function binarySearch(arr, start, end, days) {
  let ret;
  while (start <= end) {
    let mid = Math.floor((end - start) / 2) + start;

    let calculatedDays = calculateNumberDays(arr, mid);
    if (calculatedDays > days) {
      start = mid + 1;
    } else {
      ret = mid;
      end = mid - 1;
    }
  }

  return ret;
}

function calculateNumberDays(weights, target) {
  let count = 0;
  let sum = 0;
  for (let num of weights) {
    sum += num;
    if (sum > target) {
      count += 1;
      sum = num;
    }
  }
  return count + 1;
}

let w = [1, 2, 3, 1, 1];
//let target = 16;
//calculateNumberDays(w, 3);
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));

// var shipWithinDays = function (weights, D) {
//   function helper(weights, D, currentMin) {
//     D = D - 1;
//     let currWeight = 0;
//     let min = [];
//     while (weights.length) {
//       currWeight += weights.shift();
//       let remaining = weights.length;
//       if (D > remaining || (D === 0 && remaining > 0)) {
//         continue;
//       } else {
//         if (currWeight > currentMin) currentMin = currWeight;
//         if (D === 0 && remaining === 0) {
//           min.push(currentMin);
//           break;
//         }
//         min.push(helper(weights.slice(), D, currentMin));
//       }
//     }

//     return Math.min(...min);
//   }
//   return helper(weights, D, 0);
// };
