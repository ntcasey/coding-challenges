/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  function helper(subset, remaining) {
    result.push(subset);
    if (remaining.length === 0) return;

    for (let i = 0; i < remaining.length; i++) {
      let newSubset = subset.slice();
      newSubset.push(remaining[i]);

      helper(newSubset, remaining.slice(i + 1));
    }
  }
  helper([], nums);
  return result;
};

console.log(subsets([1, 2, 3]));

// var subsets = function (nums) {
//   const result = [[]];
//   if (nums.length === 0) return result;

//   for (let curr = 0; curr < nums.length; curr++) {
//     result.push([nums[curr]]);

//     let line = [nums[curr]];
//     let hop = [nums[curr]];
//     for (let j = curr + 1; j < nums.length; j++) {
//       line.push(nums[j]);
//       result.push(line);
//       if (curr + 1 !== j) {
//         hop.push(nums[j]);
//         result.push(hop);
//       }

//       hop = [nums[curr]];
//       line = line.slice();
//     }
//   }
//   return result;
// };
