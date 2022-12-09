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
 * @return {number[][]}
 */
// rootLevel = 0
// res = [ 9, 2 ]
//         2
//       /   \
//      9     10
//    /  \   /  \
//   5    4 3   11 => [[5], [9], [2, 4, 3], [10], [11]]

var verticalOrder = function(root) {
    if (!root) return [];

    const res = [];

    let rootLevel = 0;
    root.offset = 0; 
                          // rootLevel = 2
                          // [ 5, 9, 2, 10,  ]
                          // [ 0,-1, +1,-2, 0 ]
    const queue = [root]; // [ 2, 9, 10, 5, 4 ]
    
    while (queue.length > 0) {
        let node = queue.shift(); // 2, 0,

        if (res[rootLevel + node.offset]) {
            res[rootLevel + node.offset].push([node.val]);
        } else if (node.offset < 0) {
            res.unshift([node.val]);
            rootLevel++;
        } else {
            res.push([node.val]);
        }

        if (node.left) {
            node.left.offset = node.offset - 1;
            queue.push(node.left);
        }

        if (node.right) {
            node.right.offset = node.offset + 1;
            queue.push(node.right);
        }
    }

    return res;
};