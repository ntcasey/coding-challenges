/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return null;

  let stack = [root];
  let result = [];

  while (stack.length !== 0) {
    let curr = stack.pop();
    result.unshift(curr.val);
    let children = curr.children;
    for (let child of children) {
      stack.push(child);
    }
  }
  return result;
};

// function getChildren(node) {
//   return node.children;
// }
