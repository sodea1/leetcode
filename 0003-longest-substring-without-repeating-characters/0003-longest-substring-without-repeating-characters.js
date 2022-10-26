/**
 * @param {string} s
 * @return {number}
 */

//        *
//       *
// "abbabcbb"
// "pwwkew"

// two pointers sliding window
// maintain a Map to lookup repeated characters in O(1) time
// increment j until duplicate found
// re-initialize  and increment i, set j = i

var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    if (s.length === 0) return 0;
    // sliding 
    let maxLength = 0;
    let indices = new Map().set(s[0], 0);
    
    let j = 1;
    let i = 0;
    
    while (j < s.length) {
        // if duplicate, record length
        if (indices.has(s[j])) {
            maxLength = (indices.size > maxLength) ? indices.size : maxLength;
            let duplicateIdx = indices.get(s[j]);
            i = duplicateIdx + 1;
            indices = new Map().set(s[i], i);
            j = i;
        } else {
            indices.set(s[j], j);
        };
        
        j++;
    };
    
    maxLength = (indices.size > maxLength) ? indices.size : maxLength;
    
    return maxLength
};