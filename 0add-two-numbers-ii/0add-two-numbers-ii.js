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


var addTwoNumbers = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    };
    if (l1 === null || l2 === null) {
        return (l1 === null) ? l2 : l1;
    }
    
    let reversed1 = reverse(l1);
    let reversed2 = reverse(l2);
    let carry = 0; // 0
    let prev = null; // 7 => 0 => 8
    let tail = null; // 0 => 7
    
    while (reversed1 && reversed2) {
        let sum = reversed1.val + reversed2.val + carry; // 7, 10, 8
        
        if (sum > 9) {
            carry = 1;
            sum = sum % 10; // 0
        } else {
            carry = 0;
        }
        
        let node = new ListNode(sum); // 8
        if (!tail) {
            tail = node;
        } else {
            node.next = tail;
            tail = node;
        }
                
        reversed1 = reversed1.next;
        reversed2 = reversed2.next;
    };
    
    let remainingList = (reversed1) ? reversed1 : (reversed2) ? reversed2 : null;
    if (!remainingList && !carry) return tail;
    if (!remainingList && carry === 1) {
        let newNode = new ListNode(1);
        newNode.next = tail;
        tail = newNode;
        return tail;
    }
    
    if (remainingList) {
        if (!carry) {
            while (remainingList) {
                let nextNode = remainingList.next;
                remainingList.next = tail;
                tail = remainingList;
                remainingList = nextNode;
            }
        } else {
            while (remainingList) {
                let sum = carry + remainingList.val;
                if (sum > 9) {
                    carry = 1;
                    sum = sum % 10; // 0
                } else {
                    carry = 0;
                }
                let node = new ListNode(sum);
                node.next = tail;
                tail = node;
                remainingList = remainingList.next;
            }
            
            if (carry === 1) {
                let newNode = new ListNode(1);
                newNode.next = tail;
                tail = newNode;
                return tail;
            }
        }
    }
    return tail;
};

const reverse = (head) => {
    let tail = null;
    
    while (head) {
        let nextNode = head.next;
        head.next = tail;
        tail = head;
        head = nextNode;
    }
    
    return tail;
};