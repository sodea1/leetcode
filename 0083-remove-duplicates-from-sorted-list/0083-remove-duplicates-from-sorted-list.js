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
//                             * 
//                     *
// 1 => 1 => 1 => 2 => 3 => 3
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    
    let curr1 = head;
    let curr2 = head.next;
    
    while (curr2 !== null) {
        if (curr2.val === curr1.val) {
            // duplicate; increment curr2
            curr2 = curr2.next;
        } else {
            curr1.next = curr2;
            curr1 = curr2;
            curr2 = curr2.next;
        }
    };
    
    if (curr1.next !== null) {
        curr1.next = null;
    }
    
    return head;
};