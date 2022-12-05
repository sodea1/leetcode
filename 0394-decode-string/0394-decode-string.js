/**
 * @param {string} s
 * @return {string}
 */

// 3[a]d2[fe] => "aaadfefe"
// 3[z2[abc ]] => "zabcabczabcabczabcabc";
// stack = [3, "[", "z", "abcabc"    2, "[", "a", "b", "c", ...]
// pop until we see "[" => "abc"
// pop "["
// abc.repeat(pop 2)   REMEMBER TO ACCOUNT FOR DOUBLE OR TRIPLE DIGIT INTEGERS
// push "abcabc"

var decodeString = function(s) {
    const stack = [];
    let nums = "0123456789";
    let decoded = "";
    let ptr = 0;
    
    while (ptr < s.length) {
        if (s[ptr] === ']') {
            let subStr = "";
            
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            };
            stack.pop(); // pop "["
            
            let num = stack.pop();
            while (nums.includes(stack[stack.length - 1])) {
                num = stack.pop() + num;
            };
            
            subStr = subStr.repeat(num);
            stack.push(subStr);
            ptr++;
        } else {
            stack.push(s[ptr++]);
        }
    };
    
    return stack.join("");
};