/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


// "leetcodee" 2
// "ltcode"
       
// "billybobbyjooj"
// "biybyjj"
// "biyby"


var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            };
        } else {
            stack.push([char, 1]);
        }
    }
    
    let collapsedStr = "";
    
    for (let [char, count] of stack) {
        collapsedStr = collapsedStr + char.repeat(count);
    };
    
    return collapsedStr;    
};