/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let pq = new MinHeap(k);
  for (let num of nums) {
    pq.insert(num);
  }

  return pq.getMin();
};

class MinHeap {
  constructor(k) {
    this.items = [];
    this.maxItems = k;
  }

  getMin() {
    let minItem = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown();

    return minItem;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.leftChildExist(currentIndex)) {
      let smallestIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.rightChildExist(currentIndex) &&
        this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)
      ) {
        smallestIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.items[currentIndex] < this.items[smallestIndex]) break;

      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
  }

  insert(n) {
    if (this.items.length > this.maxItems && n < this.items[0]) return;

    this.items.push(n);
    this.heapifyUp();
    if (this.items.length > this.maxItems) {
      // delete...
      this.getMin();
    }
  }

  heapifyUp() {
    let currentIndex = this.items.length - 1;

    while (
      this.parentExist(currentIndex) &&
      this.getParent(currentIndex) > this.items[currentIndex]
    ) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  swap(i, j) {
    let temp = this.items[j];
    this.items[j] = this.items[i];
    this.items[i] = temp;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildExist(index) {
    return Boolean(this.items[this.getLeftChildIndex(index)]);
  }

  rightChildExist(index) {
    return Boolean(this.items[this.getRightChildIndex(index)]);
  }

  parentExist(index) {
    return index !== 0;
  }

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  getParent(index) {
    return this.items[this.getParentIndex(index)];
  }
}

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

console.log(findKthLargest(nums, k));

// 0  1 2 3 4  5  6
// [2,3,4,5,6, 7, 8]

// 2i +1
// 2i +2
