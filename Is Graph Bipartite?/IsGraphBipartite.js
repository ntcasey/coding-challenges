/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  // 1 - blue
  // 0 - red

  let color = new Array(graph.length);
  let currentColor = 1;
  color[0] = currentColor;
  let fringe = [0];
  let lastChecked = 0;

  while (fringe.length !== 0) {
    let curr = fringe.shift();
    if (color[curr] === undefined) color[curr] = 1;
    currentColor = color[curr] === 1 ? 0 : 1;
    let neighbors = graph[curr];
    if (neighbors.length === 0 && curr + 1 < graph.length) {
      fringe.push(curr + 1);
      continue;
    }

    for (let neighbor of neighbors) {
      if (color[neighbor] === undefined) {
        color[neighbor] = currentColor;
        fringe.push(neighbor);
      } else {
        if (color[neighbor] !== currentColor) return false;
      }
    }

    if (fringe.length === 0) {
      let j = lastChecked;
      while (j < graph.length) {
        if (color[j] === undefined) {
          lastChecked = j;
          fringe.push(j);
        }
        j++;
      }
    }
  }
  return true;
};

let a = [
  [],
  [2, 4, 6],
  [1, 4, 8, 9],
  [7, 8],
  [1, 2, 8, 9],
  [6, 9],
  [1, 5, 7, 8, 9],
  [3, 6, 9],
  [2, 3, 4, 6, 9],
  [2, 4, 5, 6, 7, 8],
];
isBipartite(a);
