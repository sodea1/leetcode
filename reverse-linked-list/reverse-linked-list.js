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
// n
// 2 => 3 => 4
// c
// 1 => null

var reverseList = function(head) {
    let tail = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next;
        current.next = tail;
        tail = current;
        current = nextNode;
    };
    
    return tail;
};