/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0] || b[1] - a[1];
  });

  let result = [];
  let currInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let interval = mergeInterval(currInterval, intervals[i]);
    if (interval) {
      currInterval = interval;
    } else {
      result.push(currInterval);
      currInterval = intervals[i];
    }
  }
  result.push(currInterval);

  //console.log(result);
  return result;
};

// returns new interval if they overlap
// else return false
function mergeInterval(interval1, interval2) {
  let condition = interval1[0] <= interval2[0] && interval2[0] <= interval1[1];
  // let condition2 = interval[0] <= interval2[0] && interval2[0] <= interval1[1];
  if (condition) {
    return [interval1[0], Math.max(interval1[1], interval2[1])];
  }
  return false;
}

// var merge = function (intervals) {
//   let result = [intervals[0]];
//   for (let i = 1; i < intervals.length; i++) {
//     let resultInt = 0;
//     while (resultInt < result.length) {
//       let newRange = withinRage(result[resultInt], intervals[i]);
//       if (newRange !== null && newRange !== "equal") {
//         result[resultInt] = newRange;
//         resultInt++;
//       } else if (newRange === null) {
//         result.push(intervals[i]);
//         break;
//       } else {
//         resultInt++;
//       }
//     }
//   }
//   return result.length > 2 ? removeDuplicates(result) : result;
// };

// function removeDuplicates(arr) {
//   let newArray = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     let prev = arr[i - 1];
//     let curr = arr[i];
//     if (prev[0] !== curr[0]) {
//       newArray.push(curr);
//     }
//   }
//   return newArray;
// }

// function withinRage(interval1, interval2) {
//   let low, high;
//   let newRange = null;
//   if (interval1[0] === interval2[0] && interval1[1] === interval2[1]) {
//     return "equal";
//   }

//   if (
//     (interval1[0] <= interval2[0] && interval2[0] <= interval1[1]) ||
//     (interval2[0] <= interval1[0] && interval1[0] <= interval2[1])
//   ) {
//     low = Math.min(interval1[0], interval2[0]);
//     high = Math.max(interval1[1], interval2[1]);
//     newRange = [low, high];
//   }

//   // if (interval2[0] <= interval1[0] && interval1[0] <= interval2[1]) {
//   //   low = Math.min(interval1[0], interval2[0]);
//   //   high = Math.max(interval1[1], interval2[1]);
//   //   newRange = [low, high];
//   // }

//   return newRange;
// }

let i = [
  [2, 3],
  [5, 5],
  [2, 2],
  [3, 4],
  [3, 4],
];

//console.log(merge(i));

console.log(443 % 9);
