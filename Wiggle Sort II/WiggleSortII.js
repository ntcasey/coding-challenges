/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (nums.length === 1) return nums;
  partition(0, nums.length - 1, nums);
  



  // let newArr = [nums[0]];
  // let front = 1;
  // let end = nums.length - 1;
  // let s = "end";
  // while (front !== end) {
  //   if (s === "end") {
  //     newArr.push(nums[end]);
  //     s = "start";
  //     end -= 1;
  //   } else {
  //     newArr.push(nums[front]);
  //     s = "end";
  //     front += 1;
  //   }
  // }
  // newArr.push(nums[front]);

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = newArr[i];
  // }
  // if (nums[nums.length - 1] === nums[nums.length - 2]) {
  //   swap(nums.length - 1, 2, nums);
  // }
};

function partition(start, end, nums) {
  let piviot = nums[end];
  let i = start;
  for (let j = start; j <= end - 1; j++) {
    if (nums[j] <= piviot) {
      swap(i, j, nums);
      i++;
    }
  }
  swap(i, end, nums);

  let medIndex = Math.floor(nums.length / 2);
  if (medIndex === i) return;
  if (i < medIndex) {
    partition(i + 1, end, nums);
  } else {
    partition(start, i - 1, nums);
  }
}

function swap(i, j, nums) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let a = [1, 3, 2, 2, 3, 1];
wiggleSort(a);
