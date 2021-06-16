/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c in map) {
      map[c] = map[c] + 1;
    } else {
      map[c] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (!(c in map)) {
      return false;
    } else {
      if (map[c] === 1) {
        delete map[c];
      } else {
        map[c] = map[c] - 1;
      }
    }
  }

  return true;
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
