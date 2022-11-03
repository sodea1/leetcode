/**
 * @param {number} n
 * @return {boolean}
 */

// n = 48; return false
// n = 16; return true

var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    // 16 / 2 = 8 / 2 = 4 / 2 = 2 / 2 = 1
    while (n >= 2) {
        if (n === 2) return true;
        n /= 2;
    };
    
    return false;
};