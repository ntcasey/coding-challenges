/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return transformStr(s) === transformStr(t);
};

function transformStr(string) {
  let strBuilder = "";
  let hashCount = 0;
  let i = string.length - 1;
  while (i >= 0) {
    if (string[i] === "#") {
      hashCount++;
    } else if (string[i] !== "#" && hashCount > 0) {
      hashCount--;
    } else {
      strBuilder += string[i];
    }
    i--;
  }
  return strBuilder;
}

let s = "bxj##tw";
let t = "bxo#j##tw";
backspaceCompare(s, t);
