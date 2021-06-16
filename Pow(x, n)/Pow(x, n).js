// var myPow = function(x, n) {
//   if(n === 0) return x;

//   let count = n > 0 ? -1 : 1;
//   let val = n > 0 ? x : 1/x;
//   let total = 1;
//   while(n !== 0) {
//     total *= val;
//     n += count;
//   }

//   return total;
// };

var myPow = function (x, n) {
  if (n === 0) return 1;

  let count = n > 0 ? n : -1 * n;
  let val = n > 0 ? x : 1 / x;

  let ecounter = {};

  function helper(n) {
    if (n === 1) return val;
    if (ecounter[n] !== undefined) return ecounter[n];

    let p1 = Math.floor(n / 2);
    let p2 = n - p1;
    let visit = helper(p1) * helper(p2);
    ecounter[n] = visit;
    return visit;
  }

  return helper(count);
};

let n = -2;
let x = 2.0;
console.log(myPow(x, n));
