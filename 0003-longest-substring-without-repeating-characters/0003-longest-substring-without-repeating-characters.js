/**
 * @param {string} s
 * @return {number}
 */

// Approach:
// two pointers and a hashmap of letter/idx pairs for resetting pointer i

//     j
//   i
// "abbabdj"

var lengthOfLongestSubstring = function(s) { 
    if (s.length === 0) return 0;
    let maxSize = 1;
    let start = 0;
    const map = new Map();
    map.set(s[start], start + 1);
    
    for (let end = 1; end < s.length; end++) {
        if (map.has(s[end])) {
            // reset start pointer
            start = Math.max(start, map.get(s[end]))
        };
        
        map.set(s[end], end + 1);
        maxSize = Math.max(maxSize, end - start + 1);
    };
    
    return maxSize;
};