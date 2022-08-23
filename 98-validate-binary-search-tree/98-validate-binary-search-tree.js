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
var isValidBST = function(root) {
    const validate = (root, min, max) => {
        if (!root) return true;
        
        if ((root.val <= min) || (root.val >= max)) {
            return false;
        }
        
        return validate(root.left, min, root.val) && validate(root.right, root.val,         max);
    }
    
    return validate(root, -Infinity, Infinity);
};
    