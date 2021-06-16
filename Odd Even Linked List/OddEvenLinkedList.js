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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let head2 = head.next;
  let o = head;
  let e = head.next;
  let end;
  if (!e.next) return head;

  while (o || e) {
    if (e === null) {
      end = o;
      break;
    }
    if (e.next === null) end = o;
    o.next = e.next;
    o = e.next;
    if (o === null) break;
    e.next = o.next;
    e = o.next;
  }
  end.next = head2;
  return head;
};
