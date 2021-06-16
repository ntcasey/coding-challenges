/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let count = 0;
  let removalPtr;
  let travellerPtr = head;
  while (travellerPtr) {
    count += 1;
    if (!removalPtr && count === n + 1) {
      removalPtr = head;
    } else if (removalPtr) {
      removalPtr = removalPtr.next;
    }

    if (!travellerPtr.next) break;

    travellerPtr = travellerPtr.next;
  }

  if (!removalPtr) {
    // remove first
    let temp = head.next;
    head.next = null;
    head = temp;
    return head;
  }

  let temp = removalPtr.next;
  removalPtr.next = temp.next;
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let five = new ListNode(5);
// let four = new ListNode(4, five);
// let three = new ListNode(3, four);
let two = new ListNode(2);
let one = new ListNode(1, two);
removeNthFromEnd(one, 1);
