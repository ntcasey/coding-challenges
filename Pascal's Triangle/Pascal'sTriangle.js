/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1, 1]];

  let result = [[1], [1, 1]];
  function helper(num, last) {
    if (num > numRows) return;

    let current = [1];
    for (let i = 0; i < last.length - 1; i++) {
      current.push(last[i] + last[i + 1]);
    }
    current.push(1);
    result.push(current);
    helper(num + 1, current);
  }

  helper(3, result[result.length - 1]);
  return result;
};

let num = 4;
console.log(generate(num));
