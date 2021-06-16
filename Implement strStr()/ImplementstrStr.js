var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  let firstChar = needle[0];
  for (let i = 0; i < haystack.length; i++) {
    if (firstChar === haystack[i]) {
      let result = checkString(haystack, needle, i);
      if (result === 1) {
        return i;
      } else if (result === 0) {
        continue;
      } else {
        return -1;
      }
    }
  }

  return -1;
};

function checkString(haystack, needle, pos) {
  for (let i = 0; i < needle.length; i++, pos++) {
    if (pos >= haystack.length) {
      return -1;
    }
    if (needle[i] !== haystack[pos]) {
      return 0;
    }
  }
  return 1;
}

const haystack = "hello";
const needle = "ll";

console.log(strStr(haystack, needle));
