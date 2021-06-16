/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let newSet = [];
  for (let i = 0; i < arr.length; i++) {
    if (!containDuplicate(arr[i])) newSet.push(arr[i]);
  }
  if (newSet.length === 0) return 0;
  let max = 0;

  function helper(strBuilder, start) {
    for (let i = start; i < newSet.length; i++) {
      if (!isUnique(strBuilder, newSet[i])) continue;
      let currentStr = strBuilder + newSet[i];
      if (max < currentStr.length) max = currentStr.length;
      helper(currentStr, i + 1);
    }
  }
  helper("", 0);
  return max;
};

function containDuplicate(string) {
  const duplicateSet = new Set();
  for (let i = 0; i < string.length; i++) {
    if (duplicateSet.has(string[i])) return true;

    duplicateSet.add(string[i]);
  }

  return false;
}

function isUnique(str1, str2) {
  let shortStr, longStr;
  if (str1.length > str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    shortStr = str1;
    longStr = str2;
  }

  for (let char2 of shortStr) {
    for (let char1 of longStr) {
      if (char2 === char1) return false;
    }
  }

  return true;
}

let arr = ["cha", "r", "act", "ers"];
maxLength(arr);
