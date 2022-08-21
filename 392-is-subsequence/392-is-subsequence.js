/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 = 0;
    
    for (let char of t) {
        if (s[p1] === char) {
            p1++;
        }
    }
    
    return p1 === s.length;
};