/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operators = new Set(["+", "-", "*", "/"]);
  for (let char of tokens) {
    if (operators.has(char)) {
      let num2 = stack.pop();
      let num1 = stack.pop();
      stack.push(performOperation(Number(num1), Number(num2), char));
    } else {
      stack.push(char);
    }
  }

  return stack.pop();
};

function performOperation(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return (num1 / num2) | 0; // Math.trunc(num1 / num2)
  }
}

let tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens));
