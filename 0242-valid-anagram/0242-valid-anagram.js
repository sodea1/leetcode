/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const letterFreqMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (!letterFreqMap.has(s[i])) {
            letterFreqMap.set(s[i], 1);
        } else {
            letterFreqMap.set(s[i], letterFreqMap.get(s[i]) + 1);
        };
    };
    
    for (let i = 0; i < t.length; i++) {
        if (!letterFreqMap.has(t[i])) {
            letterFreqMap.set(t[i], -1);
        } else {
            if (letterFreqMap.get(t[i]) === 1) {
                letterFreqMap.delete(t[i]);
            } else {
                letterFreqMap.set(t[i], letterFreqMap.get(t[i]) - 1);
            }
        }
    }
    
    return letterFreqMap.size === 0;
};