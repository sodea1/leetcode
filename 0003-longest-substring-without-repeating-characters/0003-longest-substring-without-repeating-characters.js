/**
 * @param {string} s
 * @return {number}
 */

//    *
//    *
// "pwwkew"

var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let maxSize = 0;
    const map = new Map();
    
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]));
        };
        
        map.set(s[j], j + 1);
        maxSize = Math.max(maxSize, j - i + 1);
    };
    
    return maxSize;
};