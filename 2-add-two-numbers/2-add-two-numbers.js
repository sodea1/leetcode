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
//             
// l1 =  [4, 6, 7];
// l2 =  [3, 4, 8];
// ans = [7  0  6  1];

// instantiate ans new ListNode(null)
// iterate through the list until l1 && l2 === null
//   sum = add l1 val and l2 val
//        if (sum > 9) then divide sum by 10 to get the first digit
//        add digit to ans
//.       carry the one with a boolean or integer var
// ans = linked List

// [9, 9, 9, 9, 9, 9]
// [9, 9, 9, 9]
//  8  9  9  9  

var addTwoNumbers = function(l1, l2) {
    let sumList = new ListNode(null);  // null => 5
    let curr = sumList; // 5 =>
    let carry = 0;
    
    while (l1 !== null && l2 !== null) {
        let sum = l1.val + l2.val + carry; // 5 + 4 => 9
        carry = 0;
        if (sum > 9) {
            let digit = sum % 10;
            if (digit === 0) {
                curr.next = new ListNode(null);
            } else {
                curr.next = new ListNode(digit);
            }
            carry = 1;
        } else {
            curr.next = new ListNode(sum);
        }
        
        curr = curr.next;
        l1 = l1.next;
        l2 = l2.next;
    };
    
    // identify which list has remaining nodes
    // iterate through each node adding val + carry
    // adding new node to curr
    
    // [9, 9, 1]
    // [1]
    // 0   0  2
    let longList = (l1 === null) ? l2 : l1; // [9, 1]
    while (longList !== null) { // [9, 1]
        let sum = longList.val + carry; // 1 + 1 = 2
        carry = 0;
        if (sum > 9) {
            let digit = sum % 10; // 0
            if (digit === 0) {
                curr.next = new ListNode(null);
            } else {
                curr.next = new ListNode(digit);
            }
            carry = 1;
        } else {
            curr.next = new ListNode(sum);
        }
        longList = longList.next;
        curr = curr.next;
    };
    
    if (carry === 1) curr.next = new ListNode(1);
    return sumList.next;
};