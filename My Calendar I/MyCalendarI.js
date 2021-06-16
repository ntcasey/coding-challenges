var MyCalendar = function () {
  this.root = null;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (!this.root) {
    this.root = new Node(start, end);
    return true;
  }

  let current = this.root;
  while (current) {
    if (start < current.start && end - 1 < current.start) {
      if (!current.left) {
        current.left = new Node(start, end);
        return true;
      } else {
        current = current.left;
        continue;
      }
    } else if (start > current.end) {
      if (!current.right) {
        current.right = new Node(start, end);
        return true;
      } else {
        current = current.right;
      }
    } else {
      return false;
    }
  }
};

class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end - 1;

    this.left = null;
    this.right = null;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
