/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function helper(substr, remainDigits) {
    if (remainDigits.length === 0) {
      result.push(substr);
      return;
    }

    let characters = map[remainDigits[0]];
    let leftoverDigit = remainDigits.substring(1);
    for (let i = 0; i < characters.length; i++) {
      let newStr = substr.substring();
      helper(newStr + characters[i], leftoverDigit);
    }
  }

  helper("", digits);
  return result;
};
