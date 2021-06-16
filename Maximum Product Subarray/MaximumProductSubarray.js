/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.push(0);
  let start = null;
  let end = null;
  let lastProd = null;
  let max = null;
  //let maxArr = [];
  let finalMax = null;
  let existZero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (i !== nums.length - 1) existZero = true;
      if (start === null) {
        continue;
      } else {
        end = i - 1;
        if (lastProd < 0) {
          let invertedMax = calculateMaxProdSubArray(
            start,
            end,
            nums,
            lastProd
          );
          max = max > invertedMax ? max : invertedMax;
        }
        // reset:
        // maxArr.push(max);
        if (finalMax === null) {
          finalMax = max;
        } else {
          finalMax = finalMax > max ? finalMax : max;
        }

        start = null;
        end = null;
        lastProd = null;
        max = null;
      }
    } else {
      if (start === null) {
        start = i;
        max = nums[start];
        lastProd = max;
      } else {
        lastProd = lastProd * nums[i];
        max = max > lastProd ? max : lastProd;
      }
    }
  }

  if (existZero && 0 > finalMax) finalMax = 0;
  return finalMax;
};

function calculateMaxProdSubArray(start, end, nums, lastVal) {
  if (start === end) return lastVal;

  let max = lastVal;
  let curr = lastVal;
  for (let j = start; j <= end; j++) {
    curr = curr / nums[j];
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}

let nums = [-2, 0, -1];
console.log(maxProduct(nums));
