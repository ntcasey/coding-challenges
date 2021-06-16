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
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let t1 = head;
  let t2 = head.next;
  head = t2;

  let temp = null;
  while (t2) {
    t1.next = t2.next;
    t2.next = t1;
    if (temp) temp.next = t2;
    if (!t1.next) break;

    temp = t1;
    t1 = t1.next;
    t2 = t1.next;
  }

  return head;
};
