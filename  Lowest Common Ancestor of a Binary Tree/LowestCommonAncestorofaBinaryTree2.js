/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function helper(node) {
    if (!node) return null;
    if (node === p || node === q) return node;

    let nodeLeft = helper(node.left);

    if (nodeLeft && nodeLeft !== p && nodeLeft !== q) return nodeLeft;

    let nodeRight = helper(node.right);

    if (!nodeLeft && !nodeRight) return null;

    if (nodeRight && nodeRight !== p && nodeRight !== q) {
      return nodeRight;
    }

    if (
      (nodeLeft === p || nodeLeft === q) &&
      (nodeRight === p || nodeRight === q)
    ) {
      return node;
    }

    return nodeLeft !== null ? nodeLeft : nodeRight;
  }
  return helper(root);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let r = new TreeNode(4);
let three = new TreeNode(3);
let four = new TreeNode(5);
let left2 = new TreeNode(2);
// let right2 = new TreeNode(6);
// let right15 = new TreeNode(3.5);
// let left15 = new TreeNode(4.5);

r.left = three;
r.right = four;
// three.left = left2;
// three.right = right15;
// four.left = left15;
// four.right = right2;

lowestCommonAncestor(r, three, left2);
