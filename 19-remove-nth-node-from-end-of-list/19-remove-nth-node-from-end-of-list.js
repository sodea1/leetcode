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
// Sample Problem:
//       i                   
//                                               j                        
// 1 -> 2 -> 3 => 4 => 5 => 6 => 7 => 8 => 9 => 10
//                x
// n = 0

var removeNthFromEnd = function(head, n) { // n = 7
    let currI = head;
    let currJ = head;
    
    while (currJ.next !== null) {     
        if (n > 0) {
            currJ = currJ.next;
            n--;
        } else if (currJ.next !== null) {
            currI = currI.next;
            currJ = currJ.next;
        };
    };
    
    // remove first node
    if (n === 1) return head.next;
    
    // remove last node
    if (currI.next === currJ) {
        currI.next = currJ.next;
        return head;
    };
    
    // remove middle node
    currI.next = currI.next.next;
    return head;
    
    
    
//     let length = 0;
//     let curr = head;
//     while (curr !== null) {
//         curr = curr.next;
//         length++;
//     };
    
//     // should have correct length of list
    
//     // find distance (x) from head to target node
//     let x = length - n; // 1
//     if (x < 1) return head.next;
    
//     let curr2 = head;
//     while (x > 1) {
//         curr2 = curr2.next;
//         x--; 1
//     };
    
//     // curr2 = node(5)
    
//     curr2.next = curr2.next.next;
//     return head;
};