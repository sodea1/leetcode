/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// if node has been visited or headA and headB equal each other

var getIntersectionNode = function(headA, headB) {
    let A = headA;
    let B = headB;
    
    while (A !== B) {
        A = (A === null) ? headB : A.next;
        B = (B === null) ? headA : B.next;
    };
    
    return A;
};