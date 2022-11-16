/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// [d, 1], [e, 3], 
// sub = eee
//       *
// s = "deeedbbcccbdaa"
// k = 3

var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            };
        } else {
            stack.push([char, 1]);
        }
    };
    
    let res = "";
    
    console.log(stack)
    for (let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};