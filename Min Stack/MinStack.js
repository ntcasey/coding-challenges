/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.arr.push(x);
  this.arr.sort((a, b) => a - b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let e = this.stack.pop();
  let i = this.arr.indexOf(e);
  this.arr = [...this.arr.slice(0, i), ...this.arr.slice(i + 1)];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let a = new MinStack();
a.push(512);
a.push(-1024);
a.push(-1024);
a.push(512);
a.pop();
a.pop();
a.pop();
