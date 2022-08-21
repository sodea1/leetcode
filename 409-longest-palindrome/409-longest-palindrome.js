/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const chars = {};
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in chars)) {
            chars[s[i]] = 1;
        } else {
            chars[s[i]] += 1;
            if (chars[s[i]] % 2 === 0) count += 1;
        };
    };
    
    if (Object.values(chars).includes(1) || s.length > (count * 2)) {
        return count * 2 + 1;
    } else {
        return count * 2;
    }
};