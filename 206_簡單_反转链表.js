///https://leetcode.cn/problems/reverse-linked-list/
///
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
var reverseList = function(head) {
    var current = head, prev = null
    while (current != null) {
        var nextTmp = current.next
        current.next = prev
        prev = current
        current = nextTmp
    }
    return prev
};
