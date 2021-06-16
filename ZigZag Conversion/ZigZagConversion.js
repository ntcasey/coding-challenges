/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  //let arr = new Array(numRows).fill(new Array());
  let arr = [...new Array(numRows)].map(() => new Array());
  let flag = false;
  let i = 0;
  while (i < s.length) {
    for (let j = 0; j < numRows; j++) {
      if (i >= s.length) {
        flag = true;
        break;
      } else {
        arr[j].push(s[i]);
        i++;
      }
    }
    if (flag) break;

    let k = numRows - 2;
    while (k > 0) {
      if (i >= s.length) {
        flag = true;
        break;
      } else {
        arr[k].push(s[i]);
        i++;
        k--;
      }
    }
    if (flag) break;
  }

  let str = "";
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      str += arr[row][col];
    }
  }
  return str;
};

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows));
