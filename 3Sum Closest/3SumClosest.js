/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let min;
  let diff = null;

  let i = 0;
  while (i < nums.length) {
    if (i !== 0 && nums[i - 1] === nums[i]) {
      i += 1;
      continue;
    }
    let current = nums[i];

    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      let sum = current + nums[p1] + nums[p2];
      let currentDiff = Math.abs(target - sum);
      if (diff === null || currentDiff < diff) {
        min = sum;
        diff = currentDiff;
      }

      //else if (currentDiff > diff) {
      //return min;
      //break;
      //}

      if (sum < target) {
        p1 += 1;
        while (nums[p1 - 1] === nums[p1]) {
          p1 += 1;
        }
      } else if (sum > target) {
        p2 -= 1;
        while (nums[p2] === nums[p2 + 1]) {
          p2 -= 1;
        }
      } else {
        return min;
      }
    }
    i += 1;
  }
  return min;
};
