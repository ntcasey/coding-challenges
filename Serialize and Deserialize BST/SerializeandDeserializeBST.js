/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "null";
  return dfsToString(root);
};

function dfsToString(root) {
  let s = "";
  function helper(node) {
    if (!node) return;
    s += node.val + "/";
    helper(node.left);
    helper(node.right);
  }
  helper(root);
  return s;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "null") return null;
  let arr = data.split("/");
  let root = new TreeNode(Number(arr[0]));

  function insert(node, val) {
    if (!node) return new TreeNode(val);

    if (val > node.val) {
      node.right = insert(node.right, val);
    } else {
      node.left = insert(node.left, val);
    }

    return node;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    insert(root, Number(arr[i]));
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let two = new TreeNode(2);
let four = new TreeNode(4);
let one = new TreeNode(1);
let three = new TreeNode(3);

one.right = two;
three.left = one;
three.right = four;
let s = serialize(three);
deserialize(s);
