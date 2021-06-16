/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i++) {
    let n = i === digits.length - 1 ? digits[i] + 1 : digits[i] + carry;
    let mod = n % 10;
    carry = Math.floor(n / 10);

    digits[i] = mod;
    if (carry === 0) return digits;
  }
  if (carry > 0) digits.unshift(carry);
  return digits;
};

let digits = [1, 2, 3];
console.log(plusOne(digits));
