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
// var sortList = function (head) {
//   const length = getLength(head);

//   let separation = 1;
//   while (separation <= length) {
//     let ptr1 = head;
//     let ptr2 = advancePtrRelative(ptr1, separation);
//     let temp = advancePtrRelative(ptr2, separation);
//   }
// };

// function advancePtrRelative(givenPtr, advance) {
//   let ptr = givenPtr;
//   let i = 0;
//   while (i < advance) {
//     ptr = ptr.next;
//     i++;

//     if (!ptr) return null;
//   }
//   return ptr;
// }

// function getLength(head) {
//   let traveller = head;
//   let i = 0;
//   while (!traveller) {
//     i++;
//   }
//   return i;
// }
