/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let tempString = "";
      let popChar;
      while (popChar !== "[") {
        popChar = stack.pop();
        if (popChar !== "[") tempString = popChar + tempString;
      }
      let count = popNumber(stack);
      let constructed = construct(count, tempString);
      stack.push(constructed);
    }
  }

  let result = "";
  while (stack.length !== 0) {
    result = stack.pop() + result;
  }
  return result;
};

function popNumber(stack) {
  let p;
  let num = "";
  while (stack.length !== 0) {
    p = stack.pop();
    if (!Number(p) && Number(p) !== 0) {
      stack.push(p);
      break;
    } else {
      num = p + num;
    }
  }
  return num;
}

function construct(count, s) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += s;
  }
  return result;
}

decodeString("100[leetcode]");
