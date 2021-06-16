/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = []; // add
  this.stack2 = []; // push & peak
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.empty()) return null;
  if (this.stack2.length !== 0) return this.stack2.pop();

  while (this.stack1.length !== 0) {
    let item = this.stack1.pop();
    this.stack2.push(item);
  }
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.empty()) return null;
  if (this.stack2.length !== 0) return this.stack2[this.stack2.length - 1];

  while (this.stack1.length !== 0) {
    let item = this.stack1.pop();
    this.stack2.push(item);
  }
  return this.stack2[this.stack2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
