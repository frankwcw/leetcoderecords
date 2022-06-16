///https://leetcode.cn/problems/linked-list-cycle/submissions/
///https://labuladong.github.io/algo/2/17/16/#判断链表是否包含环
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head, fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }

    return false
};
