// I  num1 - string, num2 - string
// O  result - string
// C
// E

var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const parts = [];
  let zeroCount = 0;
  for (let i = num2.length - 1; i >= 0; i--, zeroCount++) {
    let result = singleMultiply(num1, num2[i]) + zeroString(zeroCount);
    parts.push(result);
  }

  let total = "0";
  for (let e of parts) {
    total = add(total, e);
  }
  return removeLeadingZero(total);
};

function removeLeadingZero(total) {
  let i = 0;
  while (total[i] === "0") {
    i++;
  }

  return total.substring(i);
}

// input: count - string
// out: string
function zeroString(count) {
  let z = "";
  for (let i = 0; i < count; i++) {
    z += "0";
  }
  return z;
}

// input: num - string, digit - string
// out: string
function singleMultiply(num, digit) {
  if (digit === "0") return "0";

  result = "";
  let remainder = "0";
  for (let i = num.length - 1; i >= 0; i--) {
    let whole = String(+num[i] * +digit + +remainder);
    remainder = whole.length > 1 ? whole.substring(0, whole.length - 1) : "0";
    let last = whole[whole.length - 1];
    result = last + result;
  }

  return remainder === 0 ? result : remainder + result;
}

// input: n1 - string, n2 - string
// out: string
function add(n1, n2) {
  let g;
  if (n1.length > n2.length) {
    n2 = padZero(n1.length - n2.length, n2);
    g = n1;
  } else {
    n1 = padZero(n2.length - n1.length, n1);
    g = n2;
  }

  let result = "";
  let remainder = "0";
  for (let i = g.length - 1; i >= 0; i--) {
    let whole = String(+n1[i] + +n2[i] + +remainder);
    remainder = whole.length > 1 ? whole.substring(0, whole.length - 1) : "0";
    let last = whole[whole.length - 1];
    result = last + result;
  }

  return remainder === 0 ? result : remainder + result;
}

function padZero(count, n) {
  for (let i = 0; i < count; i++) {
    n = "0" + n;
  }
  return n;
}

//console.log(singleMultiply("345", "8"));
//console.log(padZero(8, "123"));
// a.split('').reverse().join("")

let n1 = "3";
let n2 = "456";
console.log(multiply(n1, n2));
