/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let map = {};
  let fringe = [[0, root]];
  while (fringe.length !== 0) {
    let [currlevel, current] = fringe.shift();
    if (currlevel in map) {
      map[currlevel].push(current.val);
    } else {
      map[currlevel] = [current.val];
    }

    let children = current.children;
    currlevel += 1;
    for (let child of children) {
      fringe.push([currlevel, child]);
    }
  }

  return getResult(map);
};

function getResult(map) {
  let result = [];
  let i = 0;
  while (i in map) {
    result.push(map[i]);
    i += 1;
  }
  return result;
}
