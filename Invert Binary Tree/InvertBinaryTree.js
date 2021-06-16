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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  let newRight, newLeft;
  newRight = root.left;
  newLeft = root.right;
  root.left = newLeft;
  root.right = newRight;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
