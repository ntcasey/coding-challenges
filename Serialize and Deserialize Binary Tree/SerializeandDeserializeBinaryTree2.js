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
  if (!root) return "";
  let preorder = [];
  dfsPreOrder(root, preorder);

  let stringBuilder = preorder[0];
  for (let i = 1; i < preorder.length; i++) {
    stringBuilder += ":" + `${preorder[i]}`;
  }

  return stringBuilder;
};

function dfsPreOrder(node, preorder) {
  if (!node) {
    preorder.push("null");
    return;
  }

  preorder.push(String(node.val));
  dfsPreOrder(node.left, preorder);
  dfsPreOrder(node.right, preorder);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  data = data.split(":");
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "null") {
      data[i] = null;
    } else {
      data[i] = Number(data[i]);
    }
  }
  return constructDFSTree(data);
};

function constructDFSTree(data) {
  if (data.length === 1) return new TreeNode(data[0]);
  let position = 0;
  let root = new TreeNode(data[position]);
  function helper() {
    position += 1;
    let val = data[position];
    if (val === null) return null;

    let t = new TreeNode(val);
    t.left = helper();
    t.right = helper();
    return t;
  }
  root.left = helper();
  root.right = helper();
  return root;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// let s = "1:2:4:null:null:5:null:null:3:6:null:null:7:null:null";
// deserialize(s);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let eight = new TreeNode(8);
let two = new TreeNode(2);
two.left = eight;
let four = new TreeNode(4);
let firstFour = new TreeNode(4);
firstFour.left = two;
let three = new TreeNode(3);
three.left = firstFour;
three.right = four;

serialize(three);
