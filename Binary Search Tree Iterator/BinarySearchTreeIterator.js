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
 */
var BSTIterator = function (root) {
  this.queue = [];
  this.addLeftNodes(root);
};

BSTIterator.prototype.addLeftNodes = function (treeNode) {
  let ptr = treeNode;
  while (ptr !== null) {
    this.queue.unshift(ptr);
    ptr = ptr.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let treeNode = this.queue.shift();
  if (!treeNode) return null;
  if (!treeNode.right) return treeNode.val;

  this.addLeftNodes(treeNode.right);

  return treeNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  console.log(this.queue);
  return this.queue.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(7, new TreeNode(3, new TreeNode(-25)));
let obj = new BSTIterator(root);
