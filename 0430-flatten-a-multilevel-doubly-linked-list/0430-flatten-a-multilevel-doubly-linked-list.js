/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// [3, 10]
// if curr.next === null && stack is not empty, pop from the stack, set curr.next to popped, continue (there may be more children in a list)

// save curr.next (3) to a variable


// 1 => null
// |
// 2 => null
// |
// 3 => null

var flatten = function(head) {
    if (!head) return head;
    let curr = head;
    const stack = []; // [3]
    
    while (curr !== null) {
        if (curr.child !== null) {
            let nex = (curr.next) ? curr.next : null; // save the 3
            curr.next = curr.child; // set next pointer to child
            curr.next.prev = curr;
            curr.child = null; // set child to null
            if (nex) stack.push(nex);
        };
        
        if (curr.next === null && stack.length > 0) {
            const levelUp = stack.pop();
            curr.next = levelUp;
            levelUp.prev = curr;
        };
        
        curr = curr.next;
    };
    
    return head;
};
