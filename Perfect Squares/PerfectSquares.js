/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const collection = gatherPossibleSquares(n);
  let memo = {};
  function helper(currentVal) {
    if (currentVal in memo) return memo[currentVal];
    if (currentVal === 0) {
      return 0;
    }

    let currMin = Infinity;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] <= currentVal) {
        let val = helper(currentVal - collection[i]);
        if (currMin > val) currMin = val;
      }
    }

    memo[currentVal] = currMin + 1;
    return currMin + 1;
  }
  return helper(n);
};

function gatherPossibleSquares(n) {
  const collection = [];
  let i = 1;
  while (i * i <= n) {
    collection.unshift(i * i);
    i++;
  }
  return collection;
}

let n = 13;
console.log(numSquares(n));
