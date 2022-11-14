/**
 * @param {string} s
 * @return {string}
 */
//.       *
// "3[a2[c]]"
// stack = [ 3,[,a,2,[   ]
// sub = ["c"]
// "cc"

var decodeString = function(s) {
    let decoded = [];
    let nums = "0123456789";
    let pointer = 0;
    const stack = [];
                                // stack = 3, [, 
    while (pointer < s.length) { // "3[a]2[bc]"
        let subStr = "";          // a
        if (s[pointer] !== "]") {
            stack.push(s[pointer]);
        } else {
            // hit closing bracket and need to decompose the innermost bracket
            while (stack[stack.length - 1] !== "[") {
                subStr += stack.pop();
            };
            
            stack.pop(); // opening bracket
            let num = []; // 2
            while (nums.includes(stack[stack.length - 1])) {
                num.unshift(stack.pop());
            };
            
            num = num.join("");
            
            let copy = subStr; // "cb"
            while (num > 1) {
                subStr += copy;
                num--;
            };
            
            for (let j = subStr.length - 1; j >= 0; j--) {
                stack.push(subStr[j]);
            };
        };
        
        pointer++;
    };
    
    return stack.join("");
};