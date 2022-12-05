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
// if child exists, push curr.next onto the stack
// stack = [8, 11]
// pop stack set curr.next = popped, when curr node (ie 7) next points to null without a child list

// 1 => 2 => 8 => 9 => 10
//      3 => 4 => 11
//           5 => 6 => 7

// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 11 => 8 => 9 => 10

// if child
// push curr.next if curr.next to stack
// curr.next = child
// curr = child
// proceed...

// if no child, curr = curr.next
// if no child && no next
    // if stack is empty, return head
// nextNode = pop stack
// curr.next = nextNode
// curr = curr.next;

var flatten = function(head) {
    let curr = head;
    const stack = [];
    
    while (curr) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next);
            curr.next = curr.child;
            curr.child = null;
            curr.next.prev = curr;
        } else if (!curr.next) {
            if (stack.length === 0) return head;
            let nextNode = stack.pop();
            curr.next = nextNode;
            nextNode.prev = curr;
        };
        curr = curr.next;
    };
};