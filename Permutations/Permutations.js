/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  function permuteHelper(comb, remaining) {
    if (remaining.length === 1) {
      result.push(comb.concat(remaining));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      let newComb = comb.slice();
      newComb.push(remaining[i]);

      let front = remaining.slice(0, i);
      let end = remaining.slice(i + 1);
      permuteHelper(newComb, front.concat(end));
    }
  }
  permuteHelper([], nums);
  return result;
};

let c = [1, 2, 3];
console.log(permute(c));

//

// 1   [2, 3]
