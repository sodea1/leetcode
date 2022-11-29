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

//      i
// l1 = 9 => 9 => 2
//      j
// l2 = 9 => 9 => 4 => 9
//ans = 10,298
// null => 8 => 9 => 7 => 9

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null);
    let curr = result;
    
    let remainder = 0;
     while (l1 !== null && l2 !== null) {
        let sum = l1.val + l2.val + remainder; // 5 + 4 => 9
        remainder = 0;
        if (sum > 9) {
            let digit = sum % 10;
            if (digit === 0) {
                curr.next = new ListNode(null);
            } else {
                curr.next = new ListNode(digit);
            }
            remainder = 1;
        } else {
            curr.next = new ListNode(sum);
        }
        
        curr = curr.next;
        l1 = l1.next;
        l2 = l2.next;
    };
    
    let longList = (l1 !== null) ? l1 : l2;
    while (longList !== null) {
        let sum = remainder + longList.val;
        remainder = 0
        if (sum > 9) {
            let digit = (sum % 10);
            if (digit === 0) {
                curr.next = new ListNode(null);
            } else {
                curr.next = new ListNode(digit);
            };
            remainder = 1;
        } else {
            curr.next = new ListNode(sum);
        }
        longList = longList.next;
        curr = curr.next;
    };    
    
    if (remainder === 1) {
        curr.next = new ListNode(remainder);
    };
    
    return result.next;
};