/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// [6,2,8,0,4,7,9,null,null,3,5]
var lowestCommonAncestor = function(root, p, q) {
    let val = root.val;
    const pVal = p.val;
    const qVal = q.val;
    
    if (pVal > val && qVal > val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < val && qVal < val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};