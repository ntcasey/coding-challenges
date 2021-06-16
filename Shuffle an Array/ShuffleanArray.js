/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums;
  this.current = [...this.original];
  this.size = this.original.length;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.current = [...this.original];
  return this.current;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let shuffled = [];
  let copy = [...this.current];
  let j = 0;
  for (let i = 0; i < this.size; i++, j++) {
    let randomIndex = Math.floor(Math.random() * (this.size - j));
    let val = copy[randomIndex];

    if (randomIndex !== this.size - 1 - j) {
      let valAtLastIndex = copy[this.size - 1 - j];
      copy[randomIndex] = valAtLastIndex;
    }
    shuffled.push(val);
  }
  this.current = shuffled;
  return this.current;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let nums = ["a", "b", "c", "d"];
var obj = new Solution(nums);
var param_2 = obj.shuffle();
var param_1 = obj.reset();
