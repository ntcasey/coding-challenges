/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const charCountMap = {};
  const charExpectedCount = {};
  for (let char of t) {
    charCountMap[char] = 0;

    if (char in charExpectedCount) {
      charExpectedCount[char] += 1;
    } else {
      charExpectedCount[char] = 1;
    }
  }

  let start = -1;
  let count = 0;
  let min = Infinity;
  let bound;
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (charCountMap[currentChar] === undefined && start === -1) {
      continue;
    }

    if (currentChar in charCountMap) {
      if (start === -1) start = i;
      charCountMap[currentChar] += 1;
      if (
        charCountMap[currentChar] >= 1 &&
        charCountMap[currentChar] <= charExpectedCount[currentChar]
      ) {
        count += 1;
      }
    }

    if (count === t.length) {
      if (i - start + 1 < min) {
        min = i - start + 1;
        bound = [start, i];
      }

      while (start < s.length) {
        if (
          count === t.length &&
          s[start] in charCountMap &&
          i - start + 1 < min
        ) {
          min = i - start + 1;
          bound = [start, i];
        }

        if (count === t.length - 1 && s[start] in charCountMap) {
          break;
        }

        if (s[start] in charCountMap) {
          if (
            charCountMap[currentChar] >= 1 &&
            charCountMap[s[start]] <= charExpectedCount[s[start]]
          ) {
            count -= 1;
          }

          charCountMap[s[start]] -= 1;
        }

        start += 1;
      }
    }
  }

  let strBuilder = "";
  if (bound === undefined) return strBuilder;
  for (let i = bound[0]; i <= bound[1]; i++) {
    strBuilder += s[i];
  }
  return strBuilder;
};

// let s = "bba";
// let t = "ab";
// minWindow(s, t);
