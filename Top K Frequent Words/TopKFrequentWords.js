/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let freq = {};
  for (let w of words) {
    if (!freq[w]) {
      freq[w] = new FreqNode(w);
    } else {
      freq[w].updateFrequency();
    }
  }

  let minPQ = new MinPQ(k);
  for (let property in freq) {
    minPQ.insert(freq[property]);
  }

  let result = [];
  let total = minPQ.item.length;
  for (let i = total - 1; i >= 0; i--) {
    result[i] = minPQ.getMin();
  }
  return result;
};

class FreqNode {
  constructor(w) {
    this.word = w;
    this.freq = 1;
  }

  updateFrequency() {
    this.freq += 1;
  }

  // return true if node1 > node2
  static lessThan(node1, node2) {
    if (
      node1.freq < node2.freq ||
      (node1.freq === node2.freq && node1.word > node2.word)
    ) {
      return true;
    }

    return false;
  }
}

class MinPQ {
  constructor(k) {
    this.maxLength = k;
    this.item = [];
  }

  getMin() {
    let item = this.item[0];
    let lastItem = this.item[this.item.length - 1];
    this.item[0] = lastItem;
    this.item.pop();
    this.heapifyDown();
    return item.word;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smaller = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        FreqNode.lessThan(this.getRightChild(index), this.getLeftChild(index))
      ) {
        smaller = this.getRightChildIndex(index);
      }

      if (FreqNode.lessThan(this.item[smaller], this.item[index])) {
        this.swap(smaller, index);
        index = smaller;
      } else {
        break;
      }
    }
  }

  insert(fNode) {
    if (
      this.item.length === this.maxLength &&
      FreqNode.lessThan(fNode, this.item[0])
    )
      return;

    this.item.push(fNode);
    this.heapifyUp();

    if (this.item.length > this.maxLength) {
      this.getMin();
    }
  }

  swap(index1, index2) {
    let temp = this.item[index1];
    this.item[index1] = this.item[index2];
    this.item[index2] = temp;
  }

  heapifyUp() {
    let index = this.item.length - 1;
    while (
      this.hasParent(index) &&
      FreqNode.lessThan(this.item[index], this.getParent(index))
    ) {
      // if current item is has more freq than parent
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  hasParent(index) {
    if (index !== 0) {
      return true;
    } else {
      return false;
    }
  }

  hasLeftChild(index) {
    if (this.item[2 * index + 1] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasRightChild(index) {
    if (this.item[2 * index + 2] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  getLeftChild(index) {
    return this.item[2 * index + 1];
  }

  getRightChild(index) {
    return this.item[2 * index + 2];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getParent(index) {
    return this.item[this.getParentIndex(index)];
  }
}

//let w = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
//let k = 4;

// ["nftk","qkjzgws","qrkgmliewc","nsfspyox","qengse","htpvnmozay","fqizrrnmif","glarko","pwqvwmlgri","qggx","ijy","zlfiwwb","ccjel","jqrlad"]

// ["nftk","qkjzgws","qrkgmliewc","nsfspyox","qengse","htpvnmozay","fqizrrnmif","glarko","hdemkfr","pwqvwmlgri","qggx","zskaqzwo","ijy","zlfiwwb"]

let w = [
  "glarko",
  "zlfiwwb",
  "nsfspyox",
  "pwqvwmlgri",
  "qggx",
  "qrkgmliewc",
  "zskaqzwo",
  "zskaqzwo",
  "ijy",
  "htpvnmozay",
  "jqrlad",
  "ccjel",
  "qrkgmliewc",
  "qkjzgws",
  "fqizrrnmif",
  "jqrlad",
  "nbuorw",
  "qrkgmliewc",
  "htpvnmozay",
  "nftk",
  "glarko",
  "hdemkfr",
  "axyak",
  "hdemkfr",
  "nsfspyox",
  "nsfspyox",
  "qrkgmliewc",
  "nftk",
  "nftk",
  "ccjel",
  "qrkgmliewc",
  "ocgjsu",
  "ijy",
  "glarko",
  "nbuorw",
  "nsfspyox",
  "qkjzgws",
  "qkjzgws",
  "fqizrrnmif",
  "pwqvwmlgri",
  "nftk",
  "qrkgmliewc",
  "jqrlad",
  "nftk",
  "zskaqzwo",
  "glarko",
  "nsfspyox",
  "zlfiwwb",
  "hwlvqgkdbo",
  "htpvnmozay",
  "nsfspyox",
  "zskaqzwo",
  "htpvnmozay",
  "zskaqzwo",
  "nbuorw",
  "qkjzgws",
  "zlfiwwb",
  "pwqvwmlgri",
  "zskaqzwo",
  "qengse",
  "glarko",
  "qkjzgws",
  "pwqvwmlgri",
  "fqizrrnmif",
  "nbuorw",
  "nftk",
  "ijy",
  "hdemkfr",
  "nftk",
  "qkjzgws",
  "jqrlad",
  "nftk",
  "ccjel",
  "qggx",
  "ijy",
  "qengse",
  "nftk",
  "htpvnmozay",
  "qengse",
  "eonrg",
  "qengse",
  "fqizrrnmif",
  "hwlvqgkdbo",
  "qengse",
  "qengse",
  "qggx",
  "qkjzgws",
  "qggx",
  "pwqvwmlgri",
  "htpvnmozay",
  "qrkgmliewc",
  "qengse",
  "fqizrrnmif",
  "qkjzgws",
  "qengse",
  "nftk",
  "htpvnmozay",
  "qggx",
  "zlfiwwb",
  "bwp",
  "ocgjsu",
  "qrkgmliewc",
  "ccjel",
  "hdemkfr",
  "nsfspyox",
  "hdemkfr",
  "qggx",
  "zlfiwwb",
  "nsfspyox",
  "ijy",
  "qkjzgws",
  "fqizrrnmif",
  "qkjzgws",
  "qrkgmliewc",
  "glarko",
  "hdemkfr",
  "pwqvwmlgri",
];

let k = 14;

topKFrequent(w, k);
