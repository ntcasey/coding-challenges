/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) {
    return node;
  }

  const created = {};

  function dfsTraverse(start) {
    let stack = [];
    stack.unshift(start);

    let visited = new Set();

    while (stack.length !== 0) {
      let original = stack.shift();
      if (visited.has(original.val)) {
        continue;
      }

      let node;
      if (!created[original.val]) {
        node = new Node(original.val);
        created[original.val] = node;
      }

      node = created[original.val];

      visited.add(original.val);
      for (let oriNeigh of original.neighbors) {
        // if node has already been created,
        // push already created node to current clone's neighbor
        if (created[oriNeigh.val]) {
          node.neighbors.push(created[oriNeigh.val]);
          created[oriNeigh.val].neighbors.push(node);
        } else {
          // if node hasn't been created,
          // push new node too current clone's neighbor
          let clone = new Node(oriNeigh.val);
          created[oriNeigh.val] = clone;
          node.neighbors.push(clone);
        }

        stack.unshift(oriNeigh);
      }
    }
  }

  dfsTraverse(node);
  return created[node.val];
};

// {
//   1: Node(1) clone Object

// }
