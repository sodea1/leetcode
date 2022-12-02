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
// rootVal = 3
//               i
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// inorderMap = { "9":0, "3":1, "15":2, "20":3, "7":4}
// 
//           3p
//          / \
//         9   20
//            /  \
//           15   7
var buildTree = function(preorder, inorder) {
    const inorderMap = {};
    inorder.forEach((el, idx) => {
        inorderMap[el] = idx;
    });
    
    let preorderIdx = 0;
    
    const build = (left, right) => {
        if (left > right) return null;
        
        const rootVal = preorder[preorderIdx++];
        const parent = new TreeNode(rootVal);
        parent.left = build(left, inorderMap[rootVal] - 1);
        parent.right = build(inorderMap[rootVal] + 1, right);
        
        return parent;
    }
    
    return build(0, inorder.length - 1);
};