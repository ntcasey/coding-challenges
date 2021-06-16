/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let freq = {};
  for (let n of nums) {
    if (!freq[n]) {
      freq[n] = new Node(n, 1);
    } else {
      freq[n].priority += 1;
    }
  }

  const pq = new MinPQ(k);
  for (let property in freq) {
    pq.insert(freq[property]);
  }

  let result = [];
  for (let i = 0; i < k; i++) {
    result.unshift(pq.popMin().val);
  }

  return result;
};

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }

  static compare(n1, n2) {
    if (n1.priority > n2.priority) {
      return true;
    } else {
      return false;
    }
  }
}

class MinPQ {
  constructor(k) {
    this.MAX = k;
    this.items = [];
  }

  popMin() {
    let minItem = this.items[0];
    let lastItem = this.items[this.items.length - 1];
    this.items.pop();
    this.items[0] = lastItem;
    this.heapifyDown();

    return minItem;
  }

  insert(node) {
    if (this.items.length === this.MAX && Node.compare(this.items[0], node))
      return;

    this.items.push(node);
    this.heapifyUp();
    if (this.items.length > this.MAX) {
      this.popMin();
    }
  }

  heapifyUp() {
    let index = this.items.length - 1;
    while (
      this.hasParent(index) &&
      Node.compare(this.getParent(index), this.items[index])
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallestIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        Node.compare(this.getLeftChild(index), this.getRightChild(index))
      ) {
        smallestIndex = this.getRightChildIndex(index);
      }

      if (Node.compare(this.items[smallestIndex], this.items[index])) {
        break;
      } else {
        this.swap(smallestIndex, index);
        index = smallestIndex;
      }
    }
  }

  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  hasLeftChild(index) {
    if (this.items[2 * index + 1] === undefined) return false;

    return true;
  }

  hasRightChild(index) {
    if (this.items[2 * index + 2] === undefined) return false;
    return true;
  }

  hasParent(index) {
    if (index === 0 || this.items[this.getParentIndex(index)] === undefined)
      return false;

    return true;
  }

  getLeftChild(index) {
    return this.items[2 * index + 1];
  }

  getRightChild(index) {
    return this.items[2 * index + 2];
  }

  getParent(index) {
    return this.items[Math.floor((index - 1) / 2)];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }
}

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
topKFrequent(nums, k);
