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

// input: tree's root node
// output: array of values []

//       1
//.   2    3
//. 4  5  6    

// output = [1,    2, 3, null, 5, null, null];

// queue = [[2, 3]]; => [3, null, 5]
// curr = Node(1);

// shift 1
// add 1 to output
// add 1's left child
// add 1's right child

var rightSideView = function(root) {
    if (root === null) return [];
    const vals = [];
    const queue = [[root]]; // [ [2, null] ]
    
    while (queue.length > 0) {
        const node = queue.shift(); // [ 2, 3 ]
        let layer = [];
        
        vals.push(node[node.length - 1].val)
        
        while (node.length > 0) { // [2, 3]
            const dog = node.shift(); // 2
            if (dog.left) layer.push(dog.left);
            if (dog.right) layer.push(dog.right);
        };
        
        if (layer.length > 0) queue.push(layer);
    };
    
    return vals;
};