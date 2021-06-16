/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const compareStr = findLongestStr(strs);
  let common = Infinity;
  for (let str of strs) {
    common = Math.min(countCommonPrefix(str, compareStr), common);
  }

  return compareStr.substring(0, common)
};

function findLongestStr(strs) {
  let longest = strs[0];
  for (let str of strs) {
    if (str.length > longest.length) longest = str;
  }
  return longest;
}

function countCommonPrefix(str1, longStr) {
  let i;
  for (i = 0; i < str1.length; i++) {
    if (str1[i] !== longStr[i]) {
      return i;
    }
  }
  return i;
}
