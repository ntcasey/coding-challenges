/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1 && !t2) return null;

    let newTree;
    if(!t1) {
        newTree = new TreeNode(t2.val)
        newTree.right = mergeTrees(null, t2.right);
        newTree.left = mergeTrees(null, t2.left);
    }
    else if(!t2) {
        newTree = new TreeNode(t1.val)
        newTree.left = mergeTrees(t1.left, null);
        newTree.right = mergeTrees(t1.right, null);
    } else {
        newTree = new TreeNode(t1.val + t2.val)
        newTree.left = mergeTrees(t1.left, t2.left);
        newTree.right = mergeTrees(t1.right, t2.right);
    }
      
    return newTree;
};

