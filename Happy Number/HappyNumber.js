/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, visited = new Set()) {
  if (n === 1) return true;
  if (visited.has(n)) return false;
  visited.add(n);

  let str = String(n);
  let sum = 0;
  for (let char of str) {
    sum += Number(char) * Number(char);
  }

  return isHappy(sum, visited);
};
