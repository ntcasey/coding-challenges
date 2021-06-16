/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length === 0) return true;
    
    const mainStack = []
    const closeStack = []
    const mapping = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    
    // add each char to stack
    for(let i = 0; i < s.length; i++) {
        mainStack.push(s[i]);
    }
    
    while(mainStack.length !== 0) {
        let item = mainStack.pop();
        if(item in mapping) {
            closeStack.push(item);
        } else {
            let closeItem = closeStack.pop();
            if(mapping[closeItem] !== item) {
                return false
            }
        }
    }
    
    return closeStack.length === 0;
};