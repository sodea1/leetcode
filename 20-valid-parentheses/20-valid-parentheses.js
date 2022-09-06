/**
 * @param {string} s
 * @return {boolean}
 */

// ((()))[{}}]]}])
// queue = (,(, (,
var isValid = function(s) {
    const stack = [s[0]];
    const opens = "({[";
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ")") {
            if (stack.pop() !== "(") return false;
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") return false;
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") return false;
        } else {
            stack.push(s[i])
        }
    };
    
    return stack.length > 0 ? false : true;
};