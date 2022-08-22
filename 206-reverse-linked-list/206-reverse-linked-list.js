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
    let result = null;
    
    let prev = head;
    while (prev !== null) {
        let nex = prev.next;
        if (nex === null) result = prev;
        prev.next = tail;
        tail = prev;
        prev = nex;
    }
    
    return result;
};