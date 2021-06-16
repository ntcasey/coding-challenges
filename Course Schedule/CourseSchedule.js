/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let adjList = createAdjList(numCourses, prerequisites);

  let visited = new Set();
  for (let i = 0; i < adjList.length; i++) {
    if (visited.has(i)) continue;
    if (dfs(i, adjList, visited) === false) return false;
  }
  return true;
};

function dfs(current, adjList, visited, itinerary = new Set()) {
  visited.add(current);
  itinerary.add(current);
  for (let neighbor of adjList[current]) {
    if (itinerary.has(neighbor)) return false;
    if (visited.has(neighbor)) continue;
    if (dfs(neighbor, adjList, visited, itinerary) === false) return false;
  }
  itinerary.delete(current);
}

function createAdjList(numCourses, prerequisites) {
  let adj = [...new Array(numCourses)].map(() => []);
  for (let edge of prerequisites) {
    let from = edge[1];
    let to = edge[0];
    adj[from].push(to);
  }

  return adj;
}

let num = 2;
let courses = [[1, 0]];
// let courses = [
//   [1, 0],
//   [2, 1],
//   [3, 1],
//   [4, 3],
// ];
canFinish(num, courses);
