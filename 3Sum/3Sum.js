var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];
  let i = 0;
  while (i < nums.length - 2) {
    if (i !== 0) {
      while (nums[i - 1] === nums[i]) {
        i += 1;
      }
    }

    let low = i + 1;
    let high = nums.length - 1;
    let current = 0 - nums[i];

    if (low === high) break;

    while (low < high) {
      if (nums[low] + nums[high] === current) {
        result.push([nums[i], nums[low], nums[high]]);

        low += 1;
        high -= 1;
        while (nums[low - 1] == nums[low]) low++;
        while (nums[high] === nums[high + 1]) high--;
      } else if (nums[low] + nums[high] > current) {
        high -= 1;
        while (nums[high] === nums[high + 1]) high--;
      } else {
        low += 1;
        while (nums[low - 1] == nums[low]) low++;
      }
    }
    i += 1;
  }

  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

// var threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   const result = [];
//   const memo = new Set();

//   let param1, param2, param3;
//   for (let i = 0; i < nums.length; i++) {
//     param1 = convertToSortedString(nums[i]);
//     if (memo.has(param1)) continue;

//     for (let j = i + 1; j < nums.length; j++) {
//       param2 = convertToSortedString(nums[i], nums[j]);
//       if (memo.has(param2)) continue;

//       for (let k = j + 1; k < nums.length; k++) {
//         param3 = convertToSortedString(nums[i], nums[j], nums[k]);
//         if (memo.has(param3)) continue;
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push(param.split("/"));
//         }
//         memo.add(param1);
//         memo.add(param2);
//         memo.add(param3);
//       }
//     }
//   }
//   return result;
// };

// function convertToSortedString() {
//   let arr = [...arguments];
//   let sorted = arr.sort((a, b) => a - b);
//   return sorted.join("/");
// }
