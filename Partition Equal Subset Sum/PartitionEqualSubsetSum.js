/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[i + 1] = nums[i];
    sum += nums[i];
  }

  if (sum % 2 !== 0) return false;

  const DP = [...new Array(nums.length + 1)].map(() =>
    new Array(sum / 2 + 1).fill(false)
  );
  for (let row = 1; row < DP.length; row++) {
    let currentNum = map[row];
    for (let col = 1; col < DP[0].length; col++) {
      if (
        DP[row - 1][col] ||
        col === currentNum ||
        DP[row - 1][col - currentNum]
      ) {
        DP[row][col] = true;
      }

      if (col === DP[0].length - 1 && DP[row][col]) return true;
    }
  }

  return false;
};

let nums = [2, 3, 6, 4, 1];
console.log(canPartition(nums));
