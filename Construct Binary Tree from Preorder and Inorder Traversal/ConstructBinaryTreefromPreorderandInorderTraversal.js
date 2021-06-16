/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = {};
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  let i = 0;
  let root = new TreeNode(preorder[0]);
  function builder(start, end) {
    if (end < start) return null;
    if (start === end) {
      i += 1;
      return new TreeNode(preorder[i]);
    }

    i += 1;
    let val = preorder[i];
    let index = map[val];
    let t = new TreeNode(val);
    t.left = builder(start, index - 1);
    t.right = builder(index + 1, end);
    return t;
  }
  let val = preorder[0];
  root.left = builder(0, map[val] - 1);
  root.right = builder(map[val] + 1, inorder.length - 1);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
buildTree(preorder, inorder);

// var buildTree = function (preorder, inorder) {
//   let treeNodeMap = {}; // value to node
//   let inorderMap = {}; // value to index

//   for (let i = 0; i < inorder.length; i++) {
//     inorderMap[inorder[i]] = i;
//   }

//   let root = new TreeNode(preorder[0]);
//   treeNodeMap[preorder[0]] = root;
//   for (let i = 1; i < preorder.length; i++) {
//     let before = preorder[i - 1];
//     let curr = preorder[i];
//     let node = new TreeNode(curr);

//     if (inorderMap[before] > inorderMap[curr]) {
//       treeNodeMap[before].left = node;
//     } else {
//       let indexInorder = inorderMap[curr] - 1;
//       while (!(inorder[indexInorder] in treeNodeMap)) {
//         indexInorder -= 1;
//       }
//       treeNodeMap[inorder[indexInorder]].right = node;
//     }
//     treeNodeMap[curr] = node;
//   }
//   return root;
// };
