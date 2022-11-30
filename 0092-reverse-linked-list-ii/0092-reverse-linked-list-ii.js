/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */


var reverseBetween = function(head, left, right) {
    let rightNode = head;
    let leftNode = head;
    let stop = false;
    
    const recurse = (rightNode, left, right) => {
        if (right === 1) return;
        
        rightNode = rightNode.next;
        if (left > 1) {
            leftNode = leftNode.next;
        }
        
        recurse(rightNode, left - 1, right - 1);
        console.log(left)
        console.log(right)
        if (leftNode === rightNode || rightNode.next === leftNode) {
            stop = true;
        };
        
        if (!stop) {
            [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val]
            leftNode = leftNode.next;
        }
    }
    
    recurse(rightNode, left, right);
    return head;
};