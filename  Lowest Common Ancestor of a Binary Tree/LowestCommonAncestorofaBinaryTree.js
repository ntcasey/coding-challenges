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
  let pathToP = dfsPaths(root, p);
  let pathToQ = dfsPaths(root, q);

  let larger, smaller;
  if (pathToP.length > pathToQ.length) {
    larger = pathToP;
    smaller = pathToQ;
  } else {
    smaller = pathToP;
    larger = pathToQ;
  }

  // first check
  if (larger[smaller.length - 1].val === smaller[smaller.length - 1].val)
    return larger[smaller.length - 1];

  // second check
  for (let i = smaller.length - 1; i >= 0; i--) {
    if (larger[i].val === smaller[i].val) return larger[i];
  }
};

/* 
Given root of tree, get path to target in
array format from start to target 
*/
function dfsPaths(root, target) {
  let path = [];
  function preOrderHelper(node, currentPath) {
    if (!node) return false;

    if (node.val === target.val) {
      currentPath.push(target);
      return true;
    }

    currentPath.push(node);
    let branches = [node.left, node.right];
    for (let branch of branches) {
      let found = preOrderHelper(branch, currentPath);

      if (found) return true;
    }

    currentPath.pop();
    return false;
  }
  preOrderHelper(root, path);
  return path;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let r = new TreeNode(4);
let three = new TreeNode(3);
let four = new TreeNode(5);
let left2 = new TreeNode(2);
let right2 = new TreeNode(6);
let right15 = new TreeNode(3.5);
let left15 = new TreeNode(4.5);

r.left = three;
r.right = four;
three.left = left2;
three.right = right15;
four.left = left15;
four.right = right2;

lowestCommonAncestor(r, 3.5, 4.5);
