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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  //let contains = new Set();
  function dfsHelper(node, stringBuilder) {
    if (stringBuilder === "") {
      stringBuilder += node.val;
    } else {
      stringBuilder += `->${node.val}`;
    }

    if (!node.left && !node.right) result.push(stringBuilder);
    if (node.left) dfsHelper(node.left, stringBuilder);
    if (node.right) dfsHelper(node.right, stringBuilder);
  }
  dfsHelper(root, "");
  return result;
};
