/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null;

  let lessThan = new ListNode(-1);
  let moreOrEqualThan = new ListNode(-1);
  let lessPtr = lessThan;
  let moreEqualPtr = moreOrEqualThan;
  let current = head;

  while (current) {
    if (current.val >= x) {
      moreEqualPtr.next = current;
      moreEqualPtr = moreEqualPtr.next;
      current = current.next;
      moreEqualPtr.next = null;
    } else {
      lessPtr.next = current;
      lessPtr = lessPtr.next;
      current = current.next;
      lessPtr.next = null;
    }
  }

  lessPtr.next = moreOrEqualThan.next;
  return lessThan.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let two2 = new ListNode(2);
let five = new ListNode(5, two2);
let two1 = new ListNode(2, five);
let three = new ListNode(3, two1);
let four = new ListNode(4, three);
let one = new ListNode(1, four);

// let one = new ListNode(1);
// let two = new ListNode(2, one);

console.log(partition(one, 3));

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */
//  var partition = function (head, x) {
//   if (!head) return null;

//   let lessThan = new ListNode(-1);
//   let moreThan = new ListNode(-1);
//   let lessPtr = lessThan;
//   let morePtr = moreThan;
//   let current = head;
//   let partition;

//   while (current) {
//     if (current.val > x) {
//       morePtr.next = current;
//       morePtr = morePtr.next;
//       current = current.next;
//       morePtr.next = null;
//     } else if (current.val < x) {
//       lessPtr.next = current;
//       lessPtr = lessPtr.next;
//       current = current.next;
//       lessPtr.next = null;
//     } else {
//       partition = current;
//       current = current.next;
//       partition.next = null;
//     }
//   }

//   if (partition === null) {
//     lessPtr.next = moreThan.next;
//   } else {
//     lessPtr.next = partition;
//     partition.next = moreThan.next;
//   }
//   return lessThan.next;
// };
