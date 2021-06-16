/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;

  let p1 = head;
  let turtle = head;
  let hare = head;

  let pastFirstEncounter = false;
  while (hare !== turtle || !pastFirstEncounter) {
    pastFirstEncounter = true;
    if (!hare.next || !hare.next.next) return null;
    hare = hare.next.next;
    turtle = turtle.next;
  }
  let p2 = hare;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let four = new LinkNode(4);
let zero = new LinkNode(0, four);
let two = new LinkNode(2, zero);
let three = new LinkNode(3, two);
four.next = two;
