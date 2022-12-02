/**
 * @param {string} s
 * @return {number}
 */
// Approach:
// "inebriated"

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) {
            return i;
        };
    };
    
    return -1;
};
