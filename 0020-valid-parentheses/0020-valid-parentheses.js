/**
 * @param {string} s
 * @return {boolean}
 */

// ["{", "(", "(", "[", ]
// "{(([]))}

// while stack is not empty, push/pop to match pairs
var isValid = function(s) {
    let i = 0;
    const stack = [s[i]]; 
    const brackets = { '(': ')', '{': '}', '[': ']' };
    const closing = Object.values(brackets);
    if (closing.includes(stack[i])) return false;
    
    while (i < s.length) { 
        i++;
        // check if next character is an opening bracket
        if (Object.keys(brackets).includes(s[i])) {
            stack.push(s[i]);
        } else {
            let openBracket = stack.pop();
            if (s[i] !== brackets[openBracket]) {
                return false;
            };
        };
    };
    
    return true;
};