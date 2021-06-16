var removeDuplicates = function (nums) {
  let length = nums.length;
  let current = null;
  while (length > 0) {
    current = nums[0];

    let shift = 0;
    let i = 0;
    while (true) {
      if (i >= length || nums[i] !== current) {
        break;
      }
      shift += 1;
      i += 1;
    }

    for (let count = 0; count < shift; count++) {
      nums.shift();
    }

    let max = shift >= 2 ? 2 : 1;
    for (let countPush = 0; countPush < max; countPush++) {
      nums.push(current);
    }

    length -= shift;
  }

  return nums.length;
};

let nums = [3];
console.log(removeDuplicates(nums));
console.log(nums);

// [8]

// last case:
// l = 1
//   e = 8
//     shift && push e;
//     l = l - 1;

// [1,1,1,2,2,3]

// l = 6
// loop until l = 0

// (l = l - shift)

// l = 6
//   e = 1
//     shift = 3
//       push e in arr (2 times if shift >=  2 else 1)

// [2, 2, 3, 1]

// l = 3
//   e = 2
//     shift = 2
//       push e in arr (2 times if shift >=  2 else 1)

// [3, 1, 2]

// last case:
// l = 1
//   e = 3
//     shift && push e;
//     l = l - 1;

// [1, 2, 3]
