/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    if (s.length === 1) return 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) {
            return i;
        }
    }
    return -1;
};
