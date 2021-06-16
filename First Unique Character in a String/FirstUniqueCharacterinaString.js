/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in map) {
      map[char] = 0;
      continue;
    }
    map[char] = 1;
  }

  let i = 0;
  while (i < s.length) {
    if (map[s[i]] === 1) return i;
    i += 1;
  }
  return -1;
};
