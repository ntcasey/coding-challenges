/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.count = 0;
  this.valToIndex = {};
  this.indexToVal = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.valToIndex) {
    return false;
  }

  this.indexToVal[this.count] = val;
  this.valToIndex[val] = this.count;
  this.count++;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!(val in this.valToIndex)) {
    return false;
  }

  let index = this.valToIndex[val];
  delete this.valToIndex[val]; // delete val

  if (index === this.count - 1) {
    delete this.indexToVal[index];
    this.count--;
    return true;
  }

  let lastVal = this.indexToVal[this.count - 1]; // get last val
  this.indexToVal[index] = lastVal; // swap last val w. deleted val
  delete this.indexToVal[this.count - 1]; // delete index to last val
  this.valToIndex[lastVal] = index; // delete last val to index
  this.count--;
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let index = Math.floor(Math.random() * this.count);
  return this.indexToVal[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
obj.insert("a");
obj.insert("b");
obj.insert("c");
obj.insert("d");

obj.remove("b");

//var param_2 = obj.remove(val);
var param_3 = obj.getRandom();
