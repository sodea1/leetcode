/**
 * @param {string} s
 * @return {number}
 */

//    j
//    i
// "abba"
// { a: 1, b: 2,  } stores letter and length
// length = 2

var lengthOfLongestSubstring = function(s) {
    let maxSize = 0;
    const map = new Map();
    let i = 0
    
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            // reset i
            i = Math.max(i, map.get(s[j]));
        }
        
        map.set(s[j], j + 1);
        maxSize = Math.max(maxSize, j - i + 1);
    };
    
    return maxSize;
};