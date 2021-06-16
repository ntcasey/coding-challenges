/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let palindromeMemo = {};
  function helper(parts, remaining) {
    if (remaining === "") {
      result.push([...parts]);
      return;
    }

    let stringBuilder = "";
    for (let i = 0; i < remaining.length; i++) {
      stringBuilder += remaining[i];
      if (isPalindrome(stringBuilder, palindromeMemo)) {
        //let temp = [...parts, stringBuilder];
        parts.push(stringBuilder);
        helper(temp, remaining.slice(i + 1));
        parts.pop();
      }
    }
  }
  helper([], s);
  return result;
};

function isPalindrome(s, palindromeMemo) {
  if (s in palindromeMemo) return palindromeMemo[s];

  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      palindromeMemo[s] = false;
      return false;
    }

    start++;
    end--;
  }

  palindromeMemo[s] = true;
  return true;
}

let s = "aabbba";
console.log(partition(s));
