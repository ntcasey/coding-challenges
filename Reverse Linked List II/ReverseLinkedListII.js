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
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }

  let front = head;
  let tail = head;
  for (let i = 1; i < left - 1; i++) {
    front = front.next;
  }

  for (let j = 1; j < right; j++) {
    tail = tail.next;
  }
  let tempTail = tail;
  tail = tail.next;
  tempTail.next = null;

  let [midHead, midTail] =
    left !== 1 ? reverseLL(front.next) : reverseLL(front);

  if (left !== 1) {
    front.next = midHead;
  } else {
    head = midHead;
  }

  midTail.next = tail;
  return head;
};

function reverseLL(head) {
  let newHead;
  let last = head;
  function reverseHelper(node, first) {
    if (!node) {
      return first;
    }

    let begining = node.next;
    node.next = first;
    return reverseHelper(begining, node);
  }
  newHead = reverseHelper(head);
  return [newHead, last];
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let five = new ListNode(5);
let four = new ListNode(4, five);
let three = new ListNode(3, four);
let two = new ListNode(2, three);
let one = new ListNode(1, two);

console.log(reverseBetween(one, 1, 2));
