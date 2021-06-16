/**
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let travel = {};

  for (let t of tickets) {
    let from = t[0];
    let to = t[1];

    if (travel[from] === undefined) {
      travel[from] = [to];
    } else {
      travel[from].push(to);
      travel[from].sort();
    }
  }

  return dfs("JFK", travel);
};

function dfs(start, travel) {
  let stack = [start];
  let reconstruction = [];
  function dfsHelper(current) {
    let neighbors = travel[current];
    if (neighbors === undefined || neighbors.length === 0) {
      reconstruction.push(stack.pop());
      return -1;
    }

    while (neighbors.length !== 0) {
      let dest = neighbors.shift();
      stack.push(dest);
      if (dfsHelper(dest) === -1 && neighbors.length === 0) {
        reconstruction.push(stack.pop());
        return -1;
      }
    }
  }
  dfsHelper(start);
  while (stack.length > 0) {
    reconstruction.push(stack.pop());
  }
  return reconstruction.reverse();
}

let tickets = [
  ["EZE", "TIA"],
  ["EZE", "HBA"],
  ["AXA", "TIA"],
  ["JFK", "AXA"],
  ["ANU", "JFK"],
  ["ADL", "ANU"],
  ["TIA", "AUA"],
  ["ANU", "AUA"],
  ["ADL", "EZE"],
  ["ADL", "EZE"],
  ["EZE", "ADL"],
  ["AXA", "EZE"],
  ["AUA", "AXA"],
  ["JFK", "AXA"],
  ["AXA", "AUA"],
  ["AUA", "ADL"],
  ["ANU", "EZE"],
  ["TIA", "ADL"],
  ["EZE", "ANU"],
  ["AUA", "ANU"],
];

findItinerary(tickets);
