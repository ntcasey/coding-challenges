/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = [...new Array(word1.length + 1)].map(
    () => new Array(word2.length + 1)
  );

  // dp passed by reference
  fillFirstRowColumn(dp);
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        let min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        dp[i][j] = min + 1;
      }
    }
  }

  return dp[word1.length][word2.length];
};

function fillFirstRowColumn(dp) {
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j < dp[0].length; j++) {
    dp[0][j] = j;
  }
}

let word1 = "horse";
let word2 = "ros";

console.log(minDistance(word1, word2));

// const isOneEditDistance = function (s, t) {
//   // write your code here
//     let dp = [...new Array(s.length + 1)].map(
//   () => new Array(t.length + 1)
// );

// // dp passed by reference
// fillFirstRowColumn(dp);
// for (let i = 1; i < dp.length; i++) {
//   for (let j = 1; j < dp[0].length; j++) {
//     if (s[i - 1] === t[j - 1]) {
//       dp[i][j] = dp[i - 1][j - 1];
//     } else {
//       let min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
//       dp[i][j] = min + 1;
//     }
//   }
// }

// return dp[s.length][t.length] === 1;
// }

// function fillFirstRowColumn(dp) {
// for (let i = 0; i < dp.length; i++) {
//   dp[i][0] = i;
// }

// for (let j = 0; j < dp[0].length; j++) {
//   dp[0][j] = j;
// }
// }
