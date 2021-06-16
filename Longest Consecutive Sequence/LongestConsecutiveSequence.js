/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Set(nums);
  const visited = new Set();
  // for (let num of nums) {
  //   map.add(num);
  // }

  let longest = 0;
  for (let num of nums) {
    if (map.has(num - 1) || visited.has(num)) {
      visited.add(num);
      continue;
    }

    let count = 1;
    let increment = num + 1;
    while (map.has(increment)) {
      increment++;
      count++;
    }

    if (count > longest) longest = count;
  }

  return longest;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
