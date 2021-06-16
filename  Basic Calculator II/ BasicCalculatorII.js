/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sArr = s.split("");
  let clean = [];
  let num = null;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === " ") {
      if (i === sArr.length - 1) clean.push(num);
      continue;
    }
    if (!isOperator(sArr[i])) {
      if (!num) {
        num = sArr[i];
      } else {
        num += sArr[i];
      }

      if (i === sArr.length - 1) clean.push(num);
    } else {
      clean.push(num);
      clean.push(sArr[i]);
      num = null;
    }
  }

  num = null;
  let clean2 = [];
  let i = 0;
  let previous = null;
  let operator;
  while (i < clean.length) {
    num = +clean[i];
    if (previous !== null) {
      if (operator === "*") {
        num = previous * num;
      } else {
        num = Math.floor(previous / num);
      }
      previous = null;
    }

    operator = clean[i + 1];
    if (operator === "+" || operator === "-" || operator === undefined) {
      clean2.push(num);
      if (operator !== undefined) clean2.push(operator);
      i += 2;
    } else {
      previous = num;
      i += 2;
    }
  }

  let total = clean2[0];
  let j = 1;
  while (j < clean2.length) {
    let operator = clean2[j];
    if (operator === "+") {
      total = total + clean2[j + 1];
    } else {
      total = total - clean2[j + 1];
    }
    j += 2;
  }

  return total;
};

function isOperator(s) {
  let operator = ["+", "-", "*", "/"];
  return operator.includes(s);
}

let s = "0*1";
console.log(calculate(s));
