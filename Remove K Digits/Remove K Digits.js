/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (k >= num.length) return "0";
  if (k === 0) return num;

  let stack = [num[0]];
  for (let i = 1; i < num.length; i++) {
    let curr = num[i];
    while (
      stack.length &&
      Number(curr) < Number(stack[stack.length - 1]) &&
      k > 0
    ) {
      stack.pop();
      k -= 1;
    }
    stack.push(curr);
  }

  while (stack.length && k > 0) {
    stack.pop();
    k -= 1;
  }

  let reconstruct = "";
  while (stack.length) {
    reconstruct = stack.pop() + reconstruct;
  }
  reconstruct = removeLeadingZeroes(reconstruct);
  return reconstruct;
};

function removeLeadingZeroes(s) {
  let i = 0;
  while (s[i] === "0") {
    i++;
  }
  let result = s.substring(i);
  return result === "" ? "0" : result;
}

let num = "10200",
  k = 1;
removeKdigits(num, k);

// var removeKdigits = function (num, k) {
//   if (k === 0) return num;
//   if (num === "0") return "0";

//   let minString = removeLeadingZeroes(num.substring(1));
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] === num[i - 1]) continue;
//     let currString = num.substring(0, i) + num.substring(i + 1);
//     currString = removeLeadingZeroes(currString);

//     if (compare(minString, removeLeadingZeroes(currString))) {
//       minString = currString;
//     }
//   }

//   return removeKdigits(minString, k - 1);
// };

// // if s1 > s2 return true
// // return -1;
// function compare(s1, s2) {
//   if (s1.length > s2.length) return true;
//   if (s1.length < s2.length) return false;

//   if (s1 === s2) return false;

//   for (let i = 0; i < s1.length; i++) {
//     if (Number(s1[i]) > Number(s2[i])) return true;
//     if (Number(s1[i]) < Number(s2[i])) return false;
//   }
// }

// function removeLeadingZeroes(s) {
//   let i = 0;
//   while (s[i] === "0") {
//     i++;
//   }
//   let result = s.substring(i);
//   return result === "" ? "0" : result;
// }
