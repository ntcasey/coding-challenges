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
var isSymmetric = function (root) {
  if (!root) return true;
  function symHelper(t1, t2) {
    if (!t1 && !t2) return true;
    if ((!t1 && t2) || (t1 && !t2)) return false;
    if (t1.val !== t2.val) return false;

    if (!symHelper(t1.left, t2.right)) return false;
    if (!symHelper(t1.right, t2.left)) return false;

    return true;
  }

  return symHelper(root.left, root.right);
};

// var isSymmetric = function (root) {
//   let sym = {};
//   function helper(node) {
//     let fringe = [[0, node]];
//     while (fringe.length !== 0) {
//       let current = fringe.shift();
//       let order = current[0];
//       let currNode = current[1];

//       if (order in sym) {
//         currNode !== "null"
//           ? sym[order].push(currNode.val)
//           : sym[order].push("null");
//       } else {
//         sym[order] = currNode !== "null" ? [currNode.val] : ["null"];
//       }

//       let children = getChildren(currNode);
//       console.log(children);
//       for (let child of children) {
//         fringe.push([order + 1, child]);
//       }
//     }
//   }
//   helper(root);

//   console.log(sym);

//   let indexOrder = 0;
//   while (indexOrder in sym) {
//     if (!isArraySymmetric(sym[indexOrder])) return false;
//     indexOrder += 1;
//   }

//   return true;
// };

// function getChildren(node) {
//   if (node === "null") return [];

//   let children = [];

//   if (node.left && node.right) {
//     children.push(node.left);
//     children.push(node.right);
//   }

//   if (!node.left && node.right) {
//     children.push("null");
//     children.push(node.right);
//   }

//   if (node.left && !node.right) {
//     children.push(node.left);
//     children.push("null");
//   }

//   if (!node.left && !node.right) {
//     children.push("null");
//     children.push("null");
//   }

//   console.log("here");
//   console.log(children);

//   return children;
// }

// function isArraySymmetric(arr) {
//   console.log(arr);
//   let i, j;
//   for (i = 0, j = arr.length - 1; arr.length > 1; i++, j--) {
//     let front = arr.shift();
//     let back = arr.pop();

//     if (front !== back) return false;
//   }

//   return true;
// }
