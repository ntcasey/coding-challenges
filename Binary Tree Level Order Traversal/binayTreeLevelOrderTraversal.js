class nodeLevel {
    constructor(node, level) {
        this.node = node;
        this.level = level;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return []
    }
    
    const levelChart = {}

    const fringe = []
    let n = new nodeLevel(root, 0)
    fringe.push(n)
    
    while(fringe.length !== 0) {
        
        let current = fringe.shift()
        
        // add to level chart
        if(levelChart[current.level] === undefined) {
            levelChart[current.level] = [current.node.val]
        } else {
            levelChart[current.level].push(current.node.val)
        }
    
        
        if(current.node.left) {
            n = new nodeLevel(current.node.left, current.level+1)
            fringe.push(n);
        }
        
        if(current.node.right) {
            n = new nodeLevel(current.node.right, current.level+1)
            fringe.push(n);
        }
    }
    
    const result = []
    let i = 0
    while (levelChart[i] !== undefined) {
        result.push(levelChart[i]);
        i++;
    }
    
    return result;
};