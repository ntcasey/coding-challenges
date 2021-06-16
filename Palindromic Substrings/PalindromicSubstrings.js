/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // base case:

  let count = s.length;
  let step = 1;
  let p1 = 0;
  let p2 = p1 + step;
  let memo = { "": true };
  for (let i = 1; i < s.length - 1; i++) {
    memo[s[i]] = true;
  }

  while (p2 < s.length) {
    while (p2 < s.length) {
      count += isPalindrome(p1, p2, s, memo);
      p1 += 1;
      p2 = p1 + step;
    }
    step += 1;
    p1 = 0;
    p2 = p1 + step;
  }

  return count;
};

function isPalindrome(p1, p2, s, memo) {
  // if (p1 + 1 === p2 && s[p1] === s[p2]) {
  //   memo[s.substring(p1, p2 + 1)] = true;
  //   return 1;
  // }

  if (s[p1] !== s[p2] || !memo[s.substring(p1 + 1, p2)]) {
    memo[s.substring(p1, p2 + 1)] = false;
    if (
      memo[s.substring(p1 + 1, p2)] &&
      memo[s.substring(p1 + 1, p2)] === false
    )
      delete memo[s.substring(p1 + 1, p2)];
    return 0;
  }

  // && s[p1] === s[p2]
  //if (p1 + 1 === p2 || memo[`${p1 + 1}-${p2 - 1}`]) {
  //delete memo[`${p1 + 1}-${p2 - 1}`];
  // if (
  //   memo[s.substring(p1 + 1, p2)] &&
  //   (memo[s.substring(p1 + 1, p2)].length !== 1 ||
  //     memo[s.substring(p1 + 1, p2)].length !== 0)
  // )
  //   delete memo[s.substring(p1 + 1, p2)];
  memo[s.substring(p1, p2 + 1)] = true;
  //memo[`${p1}-${p2}`] = true;
  return 1;
  //}
}

let a = "aaabab";
countSubstrings(a);

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function (s) {
//   let count = s.length;
//   for (let sec = 2; sec <= s.length; sec++) {
//     let t = 0;
//     while (t < s.length) {
//       if (t + sec > s.length) {
//         break;
//       }

//       let sub = s.slice(t, t + sec);
//       if (isPalindrome(sub)) count += 1;

//       t += 1;
//     }
//   }
//   return count;
// };

// function isPalindrome(s) {
//   let front = 0;
//   let end = s.length - 1;
//   let mid = Math.floor(s.length / 2);
//   while (front < mid) {
//     if (s[front] !== s[end]) return false;

//     front += 1;
//     end -= 1;
//   }
//   return true;
// }
