/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var preorder = function(root, list = []) {
    if (root === null) return [];
    list.push(root.val);
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            preorder(root.children[i], list);
        }
    }
    
    return list;
};