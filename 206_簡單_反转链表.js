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
    // 遞歸方式
    if (head == null || head.next == null) return head
    var last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last

    /*var current = head, prev = null
    while (current != null) {
        var nextTmp = current.next
        current.next = prev
        prev = current
        current = nextTmp
    }
    return prev*/
};
