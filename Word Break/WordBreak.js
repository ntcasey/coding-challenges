/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let wordSet = new Set();
  wordDict.map((e) => wordSet.add(e));
  let memo = {};

  function helper(s) {
    if (s === "") return true;
    if (s in memo) return memo[s];

    for (let i = 0; i < s.length; i++) {
      let part = s.substring(0, i + 1);
      if (wordSet.has(part)) {
        let sub = s.substring(i + 1);
        let check = helper(sub);

        memo[sub] = check;
        if (check) return true;
      }
    }

    return false;
  }

  return helper(s);
};

let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));
