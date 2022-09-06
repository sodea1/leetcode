/**
 * @param {string} s
 * @return {boolean}
 */

// ((()))[{}}]]}])
// queue = (,(, (,
var isValid = function(s) {
    const stack = [s[0]];
    const opens = "({["
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ")") {
            if (stack.pop() !== "(") return false;
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") return false;
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") return false;
        }
        
        if (opens.includes(s[i])) stack.push(s[i]);
    };
    if (stack.length > 0) return false;
    return true;
};