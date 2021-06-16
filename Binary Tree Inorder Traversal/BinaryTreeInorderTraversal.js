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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const inorder = [];
  function traverse(node) {
    const visited = new Set();
    const fringe = [node];

    while (fringe.length !== 0) {
      let currentNode = fringe[0];

      if (visited.has(currentNode)) {
        fringe.shift();
        inorder.push(currentNode.val);
        if (currentNode.right) fringe.unshift(currentNode.right);

        continue;
      }

      if (currentNode.left) {
        visited.add(currentNode);
      }

      if (currentNode.left) {
        fringe.unshift(currentNode.left);
      } else if (currentNode.right) {
        inorder.push(currentNode.val);
        fringe.shift();
        fringe.unshift(currentNode.right);
      } else {
        inorder.push(currentNode.val);
        fringe.shift();
      }
    }
  }
  traverse(root);
  return inorder;
};

// var inorderTraversal = function (root) {
//   let inorderNodes = [];

//   function traverse(node) {
//     if (!node) return;

//     traverse(node.left);
//     inorderNodes.push(node.val);
//     traverse(node.right);
//   }
//   traverse(root);
//   return inorderNodes;
// };
