/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let len = gas.length;
  let diff = new Array(len);
  let sum = 0;
  diff[0] = gas[len - 1] - cost[len - 1];
  sum = diff[0];
  for (let i = 1; i < gas.length; i++) {
    diff[i] = gas[i - 1] - cost[i - 1];
    sum += diff[i];
  }

  if (sum < 0) return -1;

  let startIndex;
  for (let i = 0; i < diff.length; i++) {
    if (diff[i] >= 0) {
      startIndex = i === 0 ? diff.length - 1 : i - 1;
      if (cumulateSum(i, diff)) return startIndex;
    }
  }
};

function cumulateSum(traverseFrom, diff) {
  let sum = 0;
  for (let j = traverseFrom; j < diff.length; j++) {
    sum += diff[j];
    if (sum < 0) return false;
  }
  for (let j = 0; j <= traverseFrom - 1; j++) {
    sum += diff[j];
    if (sum < 0) return false;
  }

  return true;
}

let gas = [2, 3, 4];
let cost = [3, 4, 3];
canCompleteCircuit(gas, cost);

// var canCompleteCircuit = function(gas, cost) {
//   let start = 0, tank = 0, total = 0;

//   for(let i = 0; i < gas.length; i++) {
//       const consume = gas[i] - cost[i];
//       tank += consume;

//       if(tank < 0) {
//           tank = 0;
//           start = i + 1;
//       }
//       total += consume;
//   }
//   return total < 0 ? -1 : start;
// };
