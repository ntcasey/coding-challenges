/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let output = [];
  let visited = new Set();
  function rightSideHelper(node, level) {
    if (!node) return;
    if (!visited.has(level)) {
      output.push(node.val);
      visited.add(level);
    }

    rightSideHelper(node.right, level + 1);
    rightSideHelper(node.left, level + 1);
  }
  rightSideHelper(root, 0);
  return output;
};
