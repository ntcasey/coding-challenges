/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  function connectHelper(leftNode, rightNode) {
    if (!leftNode || !rightNode) return;

    leftNode.next = rightNode;
    connectHelper(leftNode.left, leftNode.right);
    connectHelper(leftNode.right, rightNode.left);
    connectHelper(rightNode.left, rightNode.right);
  }

  connectHelper(root.left, root.right);
  return root;
};
