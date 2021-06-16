/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  let result = [];

  function helper(open, closed, str) {
    if (open === 0 && closed === 0) {
      result.push(str);
      return;
    }
    if (open > closed) return;
    if (open > 0) helper(open - 1, closed, str + "(");
    if (closed > 0) helper(open, closed - 1, str + ")");

    return;
  }
  helper(n, n, "");
  return result;
};

console.log(generateParenthesis(3));

// var generateParenthesis = function (n) {
//   let memo = {};
//   //let result = [];
//   function generateHelper(count) {
//     if (count in memo) return count[memo];
//     if (count === 1) return ["()"];
//     if (count === 2) return ["()()", "(())"];

//     let sub = generateHelper(count - 1);
//     let result = combine(sub);
//     if (count % 2 === 0) {
//       let s = "";
//       for (let p of ["(", ")"]) {
//         for (let i = 0; i < count / 2; i++) {
//           s = s + p;
//         }
//       }
//       result.push(s + s);
//     }

//     memo[count] = result;
//     return result;
//   }
//   return generateHelper(n);
// };

// function combine(arr) {
//   let subparts = [];
//   let unique = {};
//   for (let part of arr) {
//     let p1 = "(" + part + ")";
//     let p2 = "()" + part;
//     let p3 = part + "()";

//     subparts.push(p1);
//     if (!(p2 in unique)) {
//       subparts.push(p2);
//       unique[p2] = true;
//     }
//     if (!(p3 in unique)) {
//       subparts.push(p3);
//       unique[p3] = true;
//     }
//   }
//   return subparts;
// }
