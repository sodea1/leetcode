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
//           *    
// 1 -> 2 -> 3 => 4 => 5
// length - n = x representing number of nodes from head
// 
// h        rem              
// 4 => 5 => 6 -> 7 => 8 => 9
// n = 4

// [1]
// n = 1

var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;
    while (curr !== null) {
        curr = curr.next;
        length++;
    };
    
    // should have correct length of list
    
    // find distance (x) from head to target node
    let x = length - n; // 1
    if (x < 1) return head.next;
    
    let curr2 = head;
    while (x > 1) {
        curr2 = curr2.next;
        x--; 1
    };
    
    // curr2 = node(5)
    
    curr2.next = curr2.next.next;
    return head;
};