/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let count = 0;
  const windowSize = p.length;
  const [charCurrentCount, charMaxCount] = constructMap(p);
  const output = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in charCurrentCount) {
      charCurrentCount[s[i]] += 1;
      if (charCurrentCount[s[i]] <= charMaxCount[s[i]]) count += 1;
    }

    if (count === windowSize) output.push(i - windowSize + 1);

    if (i >= windowSize - 1 && s[i - windowSize + 1] in charCurrentCount) {
      charCurrentCount[s[i - windowSize + 1]] -= 1;
      if (
        charCurrentCount[s[i - windowSize + 1]] <
        charMaxCount[s[i - windowSize + 1]]
      ) {
        count -= 1;
      }
    }
  }

  return output;
};

function constructMap(p) {
  let charCurrentCount = {};
  let charMaxCount = {};
  for (let i = 0; i < p.length; i++) {
    if (p[i] in charCurrentCount) {
      charMaxCount[p[i]] += 1;
    } else {
      charCurrentCount[p[i]] = 0;
      charMaxCount[p[i]] = 1;
    }
  }

  return [charCurrentCount, charMaxCount];
}

let s = "abab";
let p = "ab";

console.log(findAnagrams(s, p));
