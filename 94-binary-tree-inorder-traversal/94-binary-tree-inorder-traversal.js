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

       //    1
       //  /  \
       // N    2
       //      / \
       //     3   N
var inorderTraversal = function(root, res = []) {
    if (root !== null) {
        inorderTraversal(root.left, res);
        res.push(root.val);
        inorderTraversal(root.right, res);
    }
    
    return res;
};