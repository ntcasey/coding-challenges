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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(node) {
    if (!node) return true;
    if (!helper(node.left)) return false;
    if (!helper(node.right)) return false;
    let ptr = node;
    if (!findExistVal(root, ptr, node.val)) return false;

    return true;
  }
  return helper(root);
};

function findExistVal(node, ptr, val) {
  if (!node) return false;
  if (node === ptr) return true;
  if (node.val === val && node !== ptr) return false;

  if (node.val > val) {
    return findExistVal(node.left, ptr, val);
  } else {
    return findExistVal(node.right, ptr, val);
  }
}

// function findExistVal(node, ptr, val, range = []) {
//   if (!node) return false;
//   if (node === ptr) return true;
//   if (node.val === val && node !== ptr) return false;
//   if (range.length === 0) {
//     if (node.val > val) {
//       return findExistVal(node.left, ptr, val, [-Infinity, node.val]);
//     } else {
//       return findExistVal(node.right, ptr, val, [node.val, Infinity]);
//     }
//   } else {
//     if (range[0] < val && val < range[1]) {
//       if (node.val > val) {
//         return findExistVal(node.left, ptr, val, [range[0], node.val]);
//       } else {
//         return findExistVal(node.right, ptr, val, [node.val, range[1]]);
//       }
//     }

//     return false;
//   }
// }

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// let six = new TreeNode(6);
// let three = new TreeNode(3);
// let four = new TreeNode(4, three, six);
// let one = new TreeNode(1);
// let five = new TreeNode(5, one, four);
// console.log(isValidBST(five));

let six = new TreeNode(6);
let four = new TreeNode(4);
let two = new TreeNode(2);
let zero = new TreeNode(0);

let five = new TreeNode(5, four, six);
let one = new TreeNode(1, zero, two);
let three = new TreeNode(3, one, five);
console.log(isValidBST(three));

// var isValidBST = function (root) {
//   let arr = [root.val];
//   const unique = new Set();
//   unique.add(root.val);

//   function helper(node) {
//     if (!node) return true;
//     if (
//       !validSide(node, node.left, "left", arr, unique) ||
//       !validSide(node, node.right, "right", arr, unique)
//     ) {
//       return false;
//     }
//     if (!helper(node.left)) return false;
//     if (!helper(node.right)) return false;

//     return true;
//   }

//   return helper(root);
// };

// function validSide(parent, child, side, arr, unique) {
//   if (!child) return true;
//   if (unique.has(child.val)) return false;
//   if (side === "left") {
//     unique.add(child.val);
//     arr.push(child.val);
//     arr.sort((a, b) => a - b);
//     let i = arr.indexOf(child.val);

//     return parent.val > child.val && arr[i + 1] === parent.val;
//   }

//   unique.add(child.val);
//   arr.push(child.val);
//   arr.sort((a, b) => a - b);
//   let i = arr.indexOf(child.val);
//   return parent.val < child.val && arr[i - 1] === parent.val;
// }
