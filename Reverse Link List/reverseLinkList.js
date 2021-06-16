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
var reverseList = function (head) {
  if (!head) return null;

  let arr = [];
  let temp = head.next;

  while (temp !== null) {
    arr.unshift(head);
    head = temp;
    temp = temp.next;
  }
  arr.unshift(head);

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;
  return arr[0];
};

// var reverseList = function (head) {
//   if (head === null) return null;
//   temp = head;
//   head = head.next;
//   temp.next = null;

//   function reverseHelper(first, second) {
//     if (first === null) return second;
//     if (first.next === null) {
//       first.next = second;
//       return first;
//     }
//     temp = first;
//     first = first.next;
//     temp.next = second;

//     return reverseHelper(first, temp);
//   }

//   return reverseHelper(head, temp);
// };
