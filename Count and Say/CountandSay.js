/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  let s = countAndSay(n - 1);

  let build = "";
  let current = "";
  let count;
  for (let i = 0; i < s.length; i++) {
    if (current === "") {
      count = 1;
      current = s[i];
      if (i + 1 === s.length) build += `${count}${current}`;
    } else if (i + 1 === s.length) {
      if (current === s[i]) {
        count += 1;
        build += `${count}${current}`;
      } else {
        build += `${count}${current}1${s[i]}`;
      }
    } else if (current !== s[i]) {
      build += `${count}${current}`;
      count = 1;
      current = s[i];
    } else {
      count += 1;
    }
  }

  return build;
};

//if (i + 1 === s.length) count += 1;

countAndSay(5);
