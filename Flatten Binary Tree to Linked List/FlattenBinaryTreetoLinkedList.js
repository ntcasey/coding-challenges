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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null;
  let queue = [];

  function dfsPreOrder(treeNode) {
    if (treeNode === null) return;

    queue.push(treeNode);
    dfsPreOrder(treeNode.left);
    dfsPreOrder(treeNode.right);
  }
  dfsPreOrder(root);
  let head = queue[0];

  while (queue.length !== 0) {
    let t = queue.shift();
    t.left = null;
    t.right = queue.length !== 0 ? queue[0] : null;
  }

  return head;
};
