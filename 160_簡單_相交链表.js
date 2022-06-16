///https://leetcode.cn/problems/intersection-of-two-linked-lists/
///https://labuladong.github.io/algo/2/17/16/#两个链表是否相交
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null

    var p1 = headA
        p2 = headB

    while(p1 != p2) {
        if (p1 == null) p1 = headB
        else p1 = p1.next
        if (p2 == null) p2 = headA
        else p2 = p2.next
    }

    return p1
};
