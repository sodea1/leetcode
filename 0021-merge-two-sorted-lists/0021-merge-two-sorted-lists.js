/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//      i
// 1 => 3 => 5 => 8
//       j
// 2 => 4 => 8 => 9
// 1 => 2

// null => 

var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(null);
    let tail = head;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        tail = tail.next;
    }
    
    if (list1 !== null) {
        tail.next = list1;
    }
    
    if (list2 !== null) {
        tail.next = list2;
    }
    
    return head.next;
};