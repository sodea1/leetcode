/**
 * @param {string} s
 * @return {number}
 */

// 

// size = 2
// [v, d, f]
//  i
//   j
// ddft

// i
//  j
// abcabcbb
// obj = { a: 0, b: 1 }

// if s[j]=== s[i] save length and stack.push(stack.shift()) and i++
// else stack.push(s[j])


var lengthOfLongestSubstring = function(s) {
    let strLength = s.length;
    let ans = 0;
    const map = {};
    
    i = 0;
    for (let j = 0; j < strLength; j++) {
        if (s[j] in map) {
            i = Math.max(map[s[j]], i);
        };
        
        ans = Math.max(ans, j - i + 1);
        map[s[j]] = j + 1;
    }
    
    return ans;
};