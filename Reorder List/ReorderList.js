/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) return null;
  let len = lengthLL(head);
  if (len === 1) return head;

  let mid = Math.floor(len / 2);
  let first = head;
  let second = reverseLinkList(midWayPoint(head, mid));

  let out = first;
  let temp;
  while (first && second) {
    temp = first.next;
    first.next = second;
    first = temp;
    temp = second.next;
    second.next = first;
    if (first) second = temp;
  }
  if (temp) second.next = temp;

  return out;
};

// sever two links
function midWayPoint(head, mid) {
  let ptr = head;
  let prev = ptr;
  let i = 0;
  while (i < mid) {
    prev = ptr;
    ptr = ptr.next;
    i += 1;
  }
  prev.next = null;
  return ptr;
}

function lengthLL(head) {
  let count = 0;
  let pointer = head;
  while (pointer) {
    count += 1;
    pointer = pointer.next;
  }
  return count;
}

function reverseLinkList(head) {
  if (!head) return null;

  function helper(link, construct) {
    if (!link) return construct;

    let curr = link;
    link = link.next;
    curr.next = construct;
    return helper(link, curr);
  }
  return helper(head, null);
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let one = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(reorderList(one));
// console.log(reverseLinkList(one));

// 5/2 = 2

// 1 2 3 4 5

// 1 2   5 4 3

// 1 5 2 4 3

// 4/2 = 2

// 1 2 3 4

// 1 2   4 3

// 1 4 2 3
