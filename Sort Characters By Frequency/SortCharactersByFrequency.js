/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {};
  populateMapFreq(s, map);

  let arr = [];
  for (let prop in map) {
    arr.push([prop, map[prop]]);
  }

  arr.sort((a, b) => {
    return b[1] - a[1];
  });

  let result = "";
  for (let obj of arr) {
    for (let i = 0; i < obj[1]; i++) {
      result += `${obj[0]}`;
    }
  }
  return result;
};

function populateMapFreq(s, map) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }
}

let a = "cccaaa";
console.log(frequencySort(a));
