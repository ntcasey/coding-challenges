/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 1) {
    return s !== "0" ? 1 : 0;
  }

  const memo = { "": 1 };
  let substring = "";
  for (let i = s.length - 1; i >= 0; i--) {
    substring = s[i] + substring;
    if (substring.length === 1) {
      if (substring[0] !== "0") {
        memo[substring] = 1;
      } else {
        memo[substring] = 0;
      }
      continue;
    }

    let total = 0;
    let firstChar = substring[0];
    let secondChar = substring[1];
    if (firstChar === "0") {
      memo[substring] = 0;
      continue;
    } else if (+(firstChar + secondChar) > 26) {
      total = memo[substring.substring(1)];
      memo[substring] = total;
    } else {
      if (substring.length === 2 && secondChar === "0") {
        memo[substring] = 1;
      } else {
        total += memo[substring.substring(1)];
        total += memo[substring.substring(2)];
        memo[substring] = total;
      }
    }
  }
  return memo[substring];
};

let w = "100";
console.log(numDecodings(w));

//+(char1 + char2) > 26;

// if (s[0] === "0") return 0;
// let memo = {};
// function numDecodingsHelper(endIndex, substring) {
//   if (endIndex === -1) {
//     return 0;
//   }

//   let newEndIndex = endIndex - 1;
//   if (substring.length === 1) {
//     memo[substring] = 1;
//     return 1 + numDecodingsHelper(newEndIndex, s[endIndex] + substring);
//   } else {
//     let char1 = substring[0];
//     let char2 = substring[1];
//     let total1, total2, rest;

//     if (char1 === "0") {
//       return 0 + numDecodingsHelper(newEndIndex, s[endIndex] + substring);
//     } else {
//       if (+(char1 + char2) > 26) {
//         total1 = 0;
//       } else {
//         if (substring.length === 2) {
//           memo[substring]  = 1;
//           return 2 + numDecodingsHelper(newEndIndex, s[endIndex] + substring)
//         } else {
//           rest = substring.substring(2);
//           total1 = memo[rest];
//           total2 =
//         }
//       }

//       //total2
//     }
//   }
// }
// return numDecodingsHelper(s.length - 2, s[s.length - 1]);
