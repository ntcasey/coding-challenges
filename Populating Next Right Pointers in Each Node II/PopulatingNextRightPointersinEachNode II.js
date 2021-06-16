/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  let parent = root;
  let traveller = null;
  let placement = null;
  while (parent) {
    if (!traveller) {
      if (parent.left) {
        traveller = parent.left;
        placement = parent.left;
      } else if (parent.right) {
        traveller = parent.right;
        placement = parent.right;
      } else {
        if (parent.next) {
          parent = parent.next;
        } else {
          parent = null;
        }
      }
      continue;
    }

    if (traveller === parent.left) {
      if (parent.right) {
        traveller.next = parent.right;
        traveller = parent.right;
      } else {
        if (parent.next) {
          parent = parent.next;
          continue;
        } else {
          parent = placement;
          placement = null;
          traveller = null;
        }
      }
      continue;
    }

    if (traveller === parent.right) {
      if (parent.next) {
        parent = parent.next;
      } else {
        parent = placement;
        placement = null;
        traveller = null;
      }
      continue;
    }

    if (parent.left) {
      traveller.next = parent.left;
      traveller = parent.left;
    } else if (parent.right) {
      traveller.next = parent.right;
      traveller = parent.right;
    } else {
      if (parent.next) {
        parent = parent.next;
      } else {
        parent = placement;
        placement = null;
        traveller = null;
      }
    }
  }
  return root;
};

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

let four = new Node(4);
let five = new Node(5);
let seven = new Node(7);

let two = new Node(2, four, five);
let three = new Node(3, null, seven);
let one = new Node(1, two, three);

connect(one);

// var connect = function (root) {
//   if (!root) return root;

//   function connectHelper(leftNode, rightNode) {
//     if (!leftNode && !rightNode) {
//       return;
//     } else if (!leftNode) {
//       connectHelper(rightNode.left, rightNode.right);
//     } else if (!rightNode) {
//       connectHelper(leftNode.left, leftNode.right);
//     } else {
//       leftNode.next = rightNode;

//       // leftNode.left
//       if (leftNode.left) {
//         if (leftNode.right) {
//           connectHelper(leftNode.left, leftNode.right);
//         } else if (rightNode.left) {
//           connectHelper(leftNode.left, rightNode.left);
//         } else if (rightNode.right) {
//           connectHelper(leftNode.left, rightNode.right);
//         } else {
//           connectHelper(leftNode.left, null);
//         }
//       }

//       // leftNode.right
//       if (leftNode.right) {
//         if (rightNode.left) {
//           connectHelper(leftNode.right, rightNode.left);
//         } else if (rightNode.right) {
//           connectHelper(leftNode.right, rightNode.right);
//         } else {
//           connectHelper(null, leftNode.right);
//         }
//       }

//       if (rightNode.left) {
//         if (rightNode.right) {
//           connectHelper(rightNode.left, rightNode.right);
//         } else {
//           connectHelper(rightNode.left, null);
//         }
//       }
//     }
//   }

//   connectHelper(root.left, root.right);
//   return root;
// };
