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
//  h
//  2 => 3
//  t
//  1 => null 

var reverseList = function(head) {
    const newHead = null;
    let tail = newHead;
    
    while (head) {
        let nextNode = head.next;
        head.next = tail;
        tail = head;
        head = nextNode;
    };
    
    return tail;
};