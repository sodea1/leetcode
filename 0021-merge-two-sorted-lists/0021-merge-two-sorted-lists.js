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
// 1 => 3 => 6
// * 
// 2 => 4 => 5
//         t
// null => 1 => 2

// newList = 1 => 2 => 3...

// curr1, curr2, newList

var mergeTwoLists = function(list1, list2) {
    let curr1 = list1;
    let curr2 = list2;
    
    let sortedList = new ListNode(null);
    let tail = sortedList;
    
    while (curr1 !== null && curr2 !== null) {
        if (curr1.val <= curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        
        tail = tail.next;
    };
    
    // check if we have remaining nodes on either list
    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;
    
    return sortedList.next;
};