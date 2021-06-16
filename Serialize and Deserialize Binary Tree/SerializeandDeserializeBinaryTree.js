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
  let tree = cloneTree(root);
  let [inorder, keyToIndexMap] = dfsInOrder(tree);
  let [postorder, postToIndexkeys] = dfsPostOrder(tree);

  for (let i = 0; i < postToIndexkeys.length; i++) {
    postToIndexkeys[i] = keyToIndexMap[postToIndexkeys[i]];
  }

  return strBuilder(inorder, postorder, postToIndexkeys);
};

function strBuilder(inorder, postorder, postToInorderIndex) {
  let strBuilder = `${inorder[0]}`;
  for (let i = 1; i < inorder.length; i++) {
    strBuilder += `:${inorder[i]}`;
  }

  strBuilder += `/${postorder[0]}`;
  for (let i = 1; i < postorder.length; i++) {
    strBuilder += `:${postorder[i]}`;
  }

  strBuilder += `/${postToInorderIndex[0]}`;
  for (let i = 1; i < postToInorderIndex.length; i++) {
    strBuilder += `:${postToInorderIndex[i]}`;
  }

  return strBuilder;
}

function TreeClone(val, key) {
  this.val = val;
  this.key = key;
  this.left = this.right = null;
}

function cloneTree(root) {
  let key = 0;
  function helper(node) {
    if (!node) return null;

    key += 1;
    let t = new TreeClone(node.val, key);
    t.left = helper(node.left);
    t.right = helper(node.right);
    return t;
  }
  let clone = helper(root);
  return clone;
}

function dfsInOrder(root) {
  let result = [];
  let keyToIndexMap = {};
  function helper(node) {
    if (node === null) return;

    helper(node.left);
    result.push(node.val);
    keyToIndexMap[node.key] = result.length - 1;
    helper(node.right);
  }
  helper(root);
  return [result, keyToIndexMap];
}

function dfsPostOrder(root) {
  let result = [];
  let postOrderKeys = [];
  function helper(node) {
    if (node === null) return;

    helper(node.left);
    helper(node.right);
    result.push(node.val);
    postOrderKeys.push(node.key);
  }
  helper(root);
  return [result, postOrderKeys];
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  let arrayFormat = convert(data);
  let inorder = arrayFormat[0];
  let postOrder = arrayFormat[1];
  let postToInorderIndex = arrayFormat[2];

  let temp = buildTree(inorder, postOrder, postToInorderIndex);
  return temp;
};

function buildTree(inorder, postorder, postToInorderIndex) {
  // for inorder array:
  // let valToIndexMap = {};
  // for (let i = 0; i < inorder.length; i++) {
  //   valToIndexMap[inorder[i]] = i;
  // }

  let val = postorder[postorder.length - 1];
  let root = new TreeNode(val);

  let traveller = postorder.length - 1;
  function helper(start, end) {
    if (start > end) return null;
    if (start === end) {
      traveller -= 1;
      return new TreeNode(postorder[traveller]);
    }

    traveller -= 1;
    let val = postorder[traveller];
    let t = new TreeNode(val);
    let index = postToInorderIndex[traveller];
    t.right = helper(index + 1, end);
    t.left = helper(start, index - 1);
    return t;
  }
  let index = postToInorderIndex[traveller];
  root.right = helper(index + 1, inorder.length - 1);
  root.left = helper(0, index - 1);

  return root;
}

function convert(s) {
  let temp = s.split("/");
  let inorder = temp[0].split(":");
  let postOrder = temp[1].split(":");
  let postToInorderIndex = temp[2].split(":");
  convertArrBoolToNumber(inorder);
  convertArrBoolToNumber(postOrder);
  convertArrBoolToNumber(postToInorderIndex);

  return [inorder, postOrder, postToInorderIndex];
}

function convertArrBoolToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
}

//let s = "-2:4:-1:3/4:-2:3:-1";

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// let neg_nine = new TreeNode(-9);
// let neg_three = new TreeNode(-3);
// neg_three.right = neg_nine;
// let neg_seven = new TreeNode(-7);
// let four = new TreeNode(4);
// four.left = neg_seven;
// four.right = neg_three;

let eight = new TreeNode(8);
let two = new TreeNode(2);
two.left = eight;
let four = new TreeNode(4);
let firstFour = new TreeNode(4);
firstFour.left = two;
let three = new TreeNode(3);
three.left = firstFour;
three.right = four;

deserialize(serialize(three));
