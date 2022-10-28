/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// n > 0 && n-- to create a stick
// n = 2

//                    *
//      *
// [1,2,3,4,5,6,7,8,9,10]
// after incrementing the end, if end = null, return head.next;

// if n = 1, increment a single pointer until .next.next is null, then point curr.next = null
// if 

var removeNthFromEnd = function(head, n) { // n = 7
    // start/end pointers
    // loop to create appropriate distance between the two
    // then point each curr node to next node until end === end node
    // then point start.next = end and return original head
    if (head.next === null && n === 1) return null;
    
    let start = head;
    let end = head;
    
    if (n === 1) {
        // remove last node
        while (start.next.next !== null) {
            start = start.next;
        };
        
        start.next = null;
        return head;
    } else {
        // remove a middle node or the first node
        // 1. move end n number of times forward
        while (n > 0) {
            end = end.next;
            n--;
        };
        
        if (end === null) {
            return head.next;
        };
        // 2. check if start.next = end
        while (end.next !== null) {
            start = start.next;
            end = end.next;
        };
        
        start.next = start.next.next;
        return head;
    };
};