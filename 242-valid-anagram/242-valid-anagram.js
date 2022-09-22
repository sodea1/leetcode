/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sLetters = {};
    
    for (let char of s) {
        if (char in sLetters) {
            sLetters[char] += 1;
        } else {
            sLetters[char] = 1;
        };
    };
    
    for (let char of t) {
        if (!char in sLetters) return false;
        sLetters[char]--;
    };
    
    const arr = Object.values(sLetters);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) return false;
    };
    
    return true;
};