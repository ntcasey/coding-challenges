/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  if (T.length === 1) return [0];

  let cumulativeBack = new Array(T.length);
  cumulativeBack[T.length - 1] = 0;
  for (let i = T.length - 2; i >= 0; i--) {
    if (T[i] < T[i + 1]) {
      cumulativeBack[i] = 1;
    } else {
      let jump = i + 1;
      while (jump <= T.length - 1) {
        let currentJumpResult = T[jump];

        if (T[i] < currentJumpResult) {
          cumulativeBack[i] = jump - i;
          break;
        } else if (cumulativeBack[jump] === 0) {
          cumulativeBack[i] = 0;
          break;
        } else {
          jump = jump + cumulativeBack[jump];
        }
      }
    }
  }
  return cumulativeBack;
};

let t = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(t));
