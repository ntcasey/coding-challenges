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
var distributeCoins = function (root) {
  let val = [];
  let parent = [];
  bfs(root, val, parent);

  let count = 0;
  let needToMakeOne;
  for (let i = val.length - 1; i > 0; i--) {
    if (val[i] === 1) continue;

    if (val[i] <= 0) {
      needToMakeOne = 1 - val[i];
      val[parent[i]] -= needToMakeOne;
      val[i] = 1;
      count += needToMakeOne;
    } else {
      needToMakeOne = val[i] - 1;
      val[parent[i]] += needToMakeOne;
      val[i] = 1;
      count += needToMakeOne;
    }
  }

  return count;
};

function bfs(root, val, parent) {
  let fringe = [{ node: root, parentIndex: -1 }];

  while (fringe.length) {
    let { node, parentIndex } = fringe.shift();
    val.push(node.val);
    parent.push(parentIndex);
    let children = getChildren(node, val.length - 1);
    for (let child of children) {
      fringe.push(child);
    }
  }
}

function getChildren(node, parentIndex) {
  let children = [];
  if (node.left) children.push({ node: node.left, parentIndex });
  if (node.right) children.push({ node: node.right, parentIndex });
  return children;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let z1 = new TreeNode(0);
let z2 = new TreeNode(0);
let z3 = new TreeNode(0);
let three = new TreeNode(3);
let one = new TreeNode(1, z1, z2);
let one2 = new TreeNode(1, z3, three);
let two = new TreeNode(2, one, one2);

// let zRight2 = new TreeNode(0);
// let twoLeft = new TreeNode(2);
// let oneRight = new TreeNode(1, twoLeft, zRight2);
// let oneLeft = new TreeNode(1);
// let twoRight = new TreeNode(2, oneLeft, oneRight);
// let zRight = new TreeNode(0, null, twoRight);
// let one = new TreeNode(1, null, zRight);

distributeCoins(two);
