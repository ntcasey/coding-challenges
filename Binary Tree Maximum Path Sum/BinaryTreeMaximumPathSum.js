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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  function dfsPostOrder(node) {
    if (!node) return -Infinity;

    let leftVal = dfsPostOrder(node.left);
    let rightVal = dfsPostOrder(node.right);

    let tempLeft = leftVal === -Infinity ? 0 : leftVal;
    let tempRight = rightVal === -Infinity ? 0 : rightVal;
    let currentTreeVal = node.val + tempLeft + tempRight;

    let currentMax = Math.max(leftVal, rightVal, currentTreeVal);
    if (max < currentMax) max = currentMax;

    return Math.max(tempLeft + node.val, tempRight + node.val, node.val);
  }
  return Math.max(dfsPostOrder(root), max);
};
