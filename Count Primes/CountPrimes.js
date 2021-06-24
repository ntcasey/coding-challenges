/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 1: prime, 0: non-prime
  let map = {};
  for (let i = 2; i < n; i++) {
    map[i] = 1;
  }

  // let top = n > 10 ? 10 : 9;

  for (let current = 2; current < n; current++) {
    if (map[current] === 0) continue;

    let multiple = 2;
    while (multiple * current < n) {
      map[multiple * current] = 0;
      multiple++;
    }
  }

  let total = 0;
  for (let i = 2; i < n; i++) {
    if (map[i] === 1) total++;
  }

  return total;
};
