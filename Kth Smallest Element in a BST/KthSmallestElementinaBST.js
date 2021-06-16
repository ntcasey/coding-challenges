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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let foundObj = { found: false, currentK: 0 };
  function helper(node, foundObj) {
    if (!node) return foundObj;

    let leftSumObj = helper(node.left, foundObj);
    if (leftSumObj.found) return leftSumObj;
    if (leftSumObj.currentK + 1 === k) {
      foundObj.val = node.val;
      foundObj.found = true;
      return foundObj;
    }
    foundObj.currentK += 1;
    return helper(node.right, foundObj);
  }
  return helper(root, foundObj).val;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let four = new TreeNode(4);
let two = new TreeNode(2);
let one = new TreeNode(1, null, two);
let three = new TreeNode(3, one, four);
kthSmallest(three, 1);
