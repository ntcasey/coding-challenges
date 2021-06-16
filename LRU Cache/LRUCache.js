/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.linkMap = {};
  this.size = 0;

  this.head = new DoubleLinkList("sentinel", "sentinel", this, this);
  this.head = sentinel;
  sentinel.next = sentinel;
  sentinel.tail = sentinel;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.linkMap) {
    this.updatePriority(key);
    return this.linkMap[key].val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.linkMap) {
    this.updatePriority(key);
    this.linkMap[key].val = value;
    return;
  }

  if (this.size + 1 > this.capacity) {
    // remove front
    let temp = this.head.next;
    this.head.next = temp.next;
    temp.next.tail = this.head;
    temp.next = null;
    temp.tail = null;

    let deleteKey = temp.key;
    delete this.linkMap[deleteKey];
    this.size -= 1;
  }

  let node = new DoubleLinkList(key, value, this.head, this.head.tail);
  this.linkMap[key] = node;
  this.head.tail.next = node;
  this.head.tail = node;
  this.size += 1;
};

LRUCache.prototype.updatePriority = function (key) {
  let node = this.linkMap[key];
  let prev = node.tail;
  let next = node.next;
  prev.next = next;

  next.tail = prev;
  node.next = this.head;
  node.tail = this.head.tail;
  this.head.tail.next = node;
  this.head.tail = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function DoubleLinkList(key, val, next = null, tail = null) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.tail = tail;
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // cache is {2=1}
lRUCache.put(2, 2); // cache is {2=2}
lRUCache.get(2); // return 2
lRUCache.put(1, 1); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
//lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 1); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(2); // return -1 (not found)
