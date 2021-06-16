var isSubsequence = function (s, t) {
  if (s === "") return true;
  if (t === "") return false;

  let sub = 0;
  let current = s[sub];
  for (let i = 0; i < t.length; i++) {
    // reached end:
    if (current === t[i] && sub + 1 === s.length) {
      return true;
    }

    if (current === t[i]) {
      sub = sub + 1;
      current = s[sub];
    }
  }

  return false;
};

let s = "ade";
let t = "abcde";
console.log(isSubsequence(s, t));
