/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const memo = {};
  function helper(currentStr, strBuilder) {
    if (currentStr in memo) return memo[currentStr];
    if (currentStr === "") {
      return [strBuilder];
    }

    let cumulativeResult = [];
    for (let word of wordDict) {
      if (word === currentStr.substring(0, word.length)) {
        let tempStr = strBuilder === "" ? word : strBuilder + " " + word;
        let currResult = helper(currentStr.substring(word.length), tempStr);

        if (currResult.length) {
          cumulativeResult = cumulativeResult.concat(currResult);
        }
      }
    }

    memo[s] = cumulativeResult;
    return memo[s];
  }
  return helper(s, "");
};

let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];
wordBreak(s, wordDict);
