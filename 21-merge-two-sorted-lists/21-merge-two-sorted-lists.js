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
//      *
// 1 => 2 => 4
//      *
// 1 => 3 => 4

// 1 => 1 => 2 => 3 => 4

var mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode(-1);
    
    let prev = newHead;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    
    if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;
    return newHead.next;
};