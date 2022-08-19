/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// p    c
// 2 => 3 => 4 => 5
//                           
// 5 => 4 => 3 => 2 => 1 => tail
//
var reverseList = function(head) {
    let tail = null;
    let curr = head;
    while (curr !== null) {
        let nex = curr.next; // null
        curr.next = tail;
        tail = curr;
        curr = nex;
    };
    return tail;
};