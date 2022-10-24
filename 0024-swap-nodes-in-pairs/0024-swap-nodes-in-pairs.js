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

// curr; onDeck
// a    b
// 1 => 2 => 3 => 4 
//       *
// -1 => 1 => 2 => 3 => 4



var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let dummy = new ListNode(-1);
    dummy.next = head;
    let curr = dummy;
    
    while (head && head.next) {
        let node = head.next.next;
        curr.next = head.next;
        curr.next.next = head;
        curr = curr.next.next;
        head = node;
        curr.next = head;
    };
    return dummy.next;
};