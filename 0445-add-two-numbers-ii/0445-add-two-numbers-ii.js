/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 7243 + 564
// 3 => 4 => 2 => 7
// 4 => 6 => 5
// -----------------
// tail <= 7
// on deck: 0

// INPUT
// 1 => 4 => 5
// 2 => 3 => 4

// REVERSED
// 5 => 4 => 1  (145)
// 4 => 3 => 2 +(234)
// -----------  -----
// 9 => 7 => 3   379
//               3 => 7 => 9 => null

var addTwoNumbers = function(l1, l2) {
    const reverse = (head) => { //    2 => 3 => 4
        let tail = null; // 4 => 3 => 2 => null
        
        while (head) {
            let nextNode = head.next;
            head.next = tail;
            tail = head;
            head = nextNode;
        }
        
        return tail;
    };
    
    l1 = reverse(l1);
    l2 = reverse(l2);
    
    let tail = null;
    let sum = 0;
    
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next
        }
        
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        let node = new ListNode(sum % 10, tail);
        tail = node;
        
        sum = sum > 9 ? 1 : 0;
    };
    
    if (sum) tail = new ListNode(1, tail);
    
    return tail;    
};