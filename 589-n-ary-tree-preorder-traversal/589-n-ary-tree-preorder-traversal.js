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

var traversal = function(root, list) {
    list.push(root.val);
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
            traversal(root.children[i], list);
        }
    }
    
    return list;
};

var preorder = function(root) {
    if (root === null) return [];
    return traversal(root, []);
};