/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let map = {};
  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = true;
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]]) count += 1;
  }
  return count;
};
