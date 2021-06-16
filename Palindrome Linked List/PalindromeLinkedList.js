/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let count = numElements(head);
  if (count === 1) return true;
  if (count === 2) return head.val === head.next.val;
  if (count === 3) return head.val === head.next.next.val;

  let [p1, p2] = getP1andP2(head, count);
  p2 = reverseLL(p2);

  while (p1) {
    if (p1.val !== p2.val) return false;

    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

function reverseLL(head) {
  let ptr = head;
  let temp = null;
  let ptr2;
  while (ptr) {
    ptr2 = ptr.next;
    ptr.next = temp;
    temp = ptr;
    ptr = ptr2;
  }
  return temp;
}

function getP1andP2(head, count) {
  let ptr1 = head;
  let ptr2;
  if (count % 2 === 0) {
    let temp = head;
    for (let i = 1; i < count / 2; i++) {
      temp = temp.next;
    }
    ptr2 = temp.next;
  } else {
    count -= 1;
    let temp = head;
    for (let i = 1; i < count / 2; i++) {
      temp = temp.next;
    }
    ptr2 = temp.next.next;
  }
  temp.next = null;

  return [ptr1, ptr2];
}

function numElements(head) {
  let count = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    count++;
  }

  return count;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let f = new ListNode(1);
// let three2 = new ListNode(2, f);
let three = new ListNode(1);
let two = new ListNode(2, three);
let one = new ListNode(1, two);
//numElements(one);
isPalindrome(one);

// 1  2  3  3  2  1
// 1. how many items  O(n)
// 2. place p1 to front and p2 to halfway point  O(n)
// 3. reverse p2 O(n)
// 4. iterate p1 and p2 simutaemously O(n)
