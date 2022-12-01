/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//        B'
// A => B => C
// A => A' => B => B' => C => C'

var copyRandomList = function(head) {
    if (!head) return head;
    
    let curr = head;
    while (curr) {
        let newNode = new ListNode(curr.val, null, null);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = curr.next.next;
    }   
    
    curr = head;
    while (curr) {
        curr.next.random = (curr.random) ? curr.random.next : null;
        curr = curr.next.next;
    };
    
    curr = head;
    let newList = head.next;
    let newHead = newList;
    
    while (curr) {
        curr.next = curr.next.next;
        curr = curr.next;
        newList.next = (newList.next) ? newList.next.next : null;
        newList = newList.next;
    };
    
    return newHead;
};