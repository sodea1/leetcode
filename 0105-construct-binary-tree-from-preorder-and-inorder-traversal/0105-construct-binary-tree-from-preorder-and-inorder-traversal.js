/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// preorder = [3,9,20,10,15,7]
// inorder = [10,9,3,15,20,7]
// inorderMap = { "9":0, "3":1, "15":2, "20":3, "7":4}
// 
//           3*
//          / \
//         9   20
//            /  \
//           15   7
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    const parent = new TreeNode(preorder[0]); // 3
    const middle = inorder.indexOf(preorder[0]); // 1
    
    parent.left = buildTree(
        preorder.slice(1, middle + 1), 
        inorder.slice(0, middle)
    );
    
    parent.right = buildTree(
        preorder.slice(middle + 1), 
        inorder.slice(middle + 1)
    );
    
    return parent;
};
