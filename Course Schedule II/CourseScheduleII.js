/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (numCourses === 1) return [0];
  let adjList = createAdjList(numCourses, prerequisites);

  let stack = [];
  let visited = new Set();
  for (let current = 0; current < numCourses; current++) {
    if (visited.has(current) || adjList[current] === undefined) continue;

    if (!dfs(current, adjList, visited, stack)) return [];
  }

  return stack.reverse();
};

function dfs(current, adjList, visited, stack, itinerary = new Set()) {
  visited.add(current);
  itinerary.add(current);
  for (let neighbor of adjList[current]) {
    if (itinerary.has(neighbor)) return false;
    if (visited.has(neighbor)) continue;

    if (!dfs(neighbor, adjList, visited, stack, itinerary)) return false;
  }

  itinerary.delete(current);
  stack.push(current);
  return true;
}

function createAdjList(numCourses, prerequisites) {
  let adjList = [...new Array(numCourses)].map(() => []);
  for (let pair of prerequisites) {
    let from = pair[1];
    let to = pair[0];

    adjList[from].push(to);
  }

  return adjList;
}

let pre = [[]];
let num = 1;

findOrder(num, pre);
