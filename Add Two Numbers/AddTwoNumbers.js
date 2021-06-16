/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // base case:
  if (l1 === null && l2 === null) {
    return null;
  }
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  // head pointing to sentinel:
  let head = new ListNode(-1);
  let temp = head;
  let carryOver = 0;

  while (l1 !== null || l2 !== null) {
    let currL1, currL2;
    currL1 = l1 ? l1.val : 0;
    currL2 = l2 ? l2.val : 0;

    let sum = currL1 + currL2 + carryOver;
    let base = sum % 10;
    carryOver = Math.floor(sum / 10);

    temp.next = new ListNode(base);
    temp = temp.next;

    l1 = nextNode(l1);
    l2 = nextNode(l2);
  }

  if (carryOver !== 0) {
    temp.next = new ListNode(carryOver);
  }

  return head.next;
};

// return null if current node is null
// else returns next node (can be null)
function nextNode(node) {
  return node ? node.next : null;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

let a = addTwoNumbers(l1, l2);
