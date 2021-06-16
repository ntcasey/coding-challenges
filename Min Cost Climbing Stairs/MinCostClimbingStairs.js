var minCostClimbingStairs = function (cost) {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];

  let map = {
    0: cost[0],
    1: cost[1],
  };

  for (let i = 2; i < cost.length; i++) {
    let first = map[i - 2];
    let second = map[i - 1];
    let total = Math.min(first, second) + cost[i];
    map[i] = total;
  }

  return Math.min(map[cost.length - 2], map[cost.length - 1]);
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
