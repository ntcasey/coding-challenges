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
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let max = 0;
  function postOrder(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    let leftSum = postOrder(node.left);
    let rightSum = postOrder(node.right);
    let currentTotal = leftSum + rightSum;
    max = Math.max(currentTotal, max);
    return Math.max(leftSum, rightSum) + 1;
  }
  postOrder(root);
  return max;
};
