/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  
  if(!nums || nums.length === 0) return null;
  
  return construct1(nums, 0, nums.length-1);
};

var construct1 = function (nums, start, end) {
  
  if(start > end) {
    return null;
  }
  
  let mid = start + Math.floor((end-start)/2)
  let t = new TreeNode(nums[mid]);
  t.left = construct1(nums, start, mid-1)
  t.right = construct1(nums, mid+1, end)
  
  return t;
}