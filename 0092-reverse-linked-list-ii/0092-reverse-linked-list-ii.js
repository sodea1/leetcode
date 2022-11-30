/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// con   
//  p
//      t
// [1,2,3,4,5]
//.     3


var reverseBetween = function(head, left, right) {
    let prev = null;
    let curr = head;
    
    while (left > 1) {
        prev = curr;
        curr = curr.next;
        left--;
        right--;
    }
    
    let connector = prev;
    let tail = curr;
    
    while (right > 0) {
        let thirdNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = thirdNode;
        right--;
    };
    
    if (connector) {
        connector.next = prev;
    } else {
        head = prev;
    };
    
    tail.next = curr;
    
    return head;
}
