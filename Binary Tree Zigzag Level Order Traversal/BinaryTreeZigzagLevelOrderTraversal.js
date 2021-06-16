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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const treeOrder = {};

  function bfsHelper(node) {
    let fringe = [[0, node]];
    let tempFringe = [];
    while (fringe.length !== 0) {
      let current = fringe.shift();
      let currentOrder = current[0];
      let currNode = current[1];

      if (currentOrder in treeOrder) {
        treeOrder[currentOrder].push(currNode.val);
      } else {
        treeOrder[currentOrder] = [currNode.val];
      }

      // tempFringe passed by reference: 
      modifyFringe(currNode, currentOrder + 1, tempFringe);
        
      if (fringe.length === 0) {
        fringe = tempFringe;
        tempFringe = []
      }
    }
  }
  bfsHelper(root);
  let i = 0;
  while (i in treeOrder) {
    result.push(treeOrder[i]);
    i++;
  }
  return result;
};

function modifyFringe(node, order, tempFringe) {
  if (order % 2 !== 0) {
    if (node.left) tempFringe.unshift([order, node.left]);
    if (node.right) tempFringe.unshift([order, node.right]);
  } else {
    if (node.right) tempFringe.unshift([order, node.right]);
    if (node.left) tempFringe.unshift([order, node.left]);
  }
}

// var zigzagLevelOrder = function (root) {
//   if (!root) return [];

//   let order = {};
//   function bfsHelper(node) {
//     // fringe = [[order #0, node], [order #1, node], ..]
//     let fringe = [[0, node]];
//     while (fringe.length !== 0) {
//       console.log(fringe);
//       let current = fringe.shift();
//       let numOrder = current[0];
//       let currNode = current[1];

//       if (numOrder in order) {
//         order[numOrder].push(currNode.val);
//       } else {
//         order[numOrder] = [currNode.val];
//       }

//       let children = getChildren(currNode, numOrder + 1);
//       for (let child of children) {
//         fringe.push([numOrder + 1, child]);
//       }
//     }
//   }
//   bfsHelper(root);

//   let result = [];
//   let member = 0;
//   while (member in order) {
//     result.push(order[member]);
//     member++;
//   }

//   return result;
// };

// function getChildren(node, numOrder) {
//   let children = [];

//   // add children left to right;
//   if (numOrder % 2 === 0) {
//     if (node.left) children.push(node.left);
//     if (node.right) children.push(node.right);
//   } else {
//     // add children right to left
//     if (node.right) children.push(node.right);
//     if (node.left) children.push(node.left);
//   }
//   return children;
// }



stdout
1
[]
[      [ 1, [3,null,5] ]      ,     [ 1, [2,4] ]        ]
2
[ [ 1, [2,4] ] ]
[ [ 2, [5] ], [ 1, [2,4] ] ]
3
[ [ 1, [2,4] ] ]
[ [ 1, [2,4] ] ]
2
[]
[ [ 2, [4] ] ]
3
[]
[]