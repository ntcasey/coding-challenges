/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  return Math.floor(n / 5);
};

function computeFactorial(n) {
  let num = 1;
  for (let i = n; i > 1; i--) {
    num *= i;
  }
  return num;
}

console.log(computeFactorial(21));

/*
2, 5, 10
5        120
9        362880
10       3628800
15       1307674368000
20       2432902008176640000 



9
1 digit
  -> if 9 >= 5 
      -> 1 zero
     else 
      -> 0 zero

10
2 digit
  -> if

100/5 = 20

*/
