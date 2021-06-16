/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  let pq = new MinPQ();
  for (let l of lists) {
    if (l === null) continue;
    pq.insert(l);
  }

  let root = new ListNode(-1);
  let temp = root;
  while (!pq.isEmpty()) {
    // sortedResult.push(pq.getMin());
    temp.next = new ListNode(pq.getMin());
    temp = temp.next;
  }

  return root.next;
};

class MinPQ {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getMin() {
    //console.log(this.items);
    let min = this.items[0].val;
    this.items[0] = this.items[0].next;
    if (this.items.length === 1) {
      if (this.items[0] === null) {
        this.items.pop();
      }
      return min;
    }

    if (this.items[0] === null) {
      let lastItem = this.items.pop();
      this.items[0] = lastItem;
    }
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let currIndex = 0;

    while (this.leftExist(currIndex)) {
      let smallestIndex = this.getLeftIndex(currIndex);
      if (
        this.rightExist(currIndex) &&
        this.getRight(currIndex) < this.getLeft(currIndex)
      ) {
        smallestIndex = this.getRightIndex(currIndex);
      }

      if (this.items[smallestIndex].val < this.items[currIndex].val) {
        this.swap(smallestIndex, currIndex);
        currIndex = smallestIndex;
      } else {
        break;
      }
    }
  }

  insert(array) {
    this.items.push(array);
    this.heapifyUp();
  }

  heapifyUp() {
    let currIndex = this.items.length - 1;

    while (
      this.parentExist(currIndex) &&
      this.getParent(currIndex) > this.items[currIndex].val
    ) {
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
    }
  }

  swap(i, j) {
    let temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftExist(i) {
    return this.items[this.getLeftIndex(i)] !== undefined;
  }

  rightExist(i) {
    return this.items[this.getRightIndex(i)] !== undefined;
  }

  parentExist(i) {
    return i > 0 && this.items[this.getParentIndex(i)];
  }

  /* Get first value of parent array */
  getParent(i) {
    return this.items[this.getParentIndex(i)].val;
  }

  /* Get first value of Left Child array */
  getLeft(i) {
    return this.items[this.getLeftIndex(i)].val;
  }

  /* Get first value of Right Child array */
  getRight(i) {
    return this.items[this.getRightIndex(i)].val;
  }
}

let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let one = new ListNode(1, new ListNode(4, new ListNode(5)));
let two = new ListNode(1, new ListNode(3, new ListNode(4)));
let three = new ListNode(2, new ListNode(6));

let l2 = [one, two, three];

mergeKLists(l2);
