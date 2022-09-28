/**
 * @param {number} n
 * @return {boolean}
 */

// Input = Integer
// Output = Boolean
// 9 => true
// 44 => false
// 2 => false


var isPowerOfThree = function(n) {
    if (n < 1) return false;
    
    while (n % 3 === 0) {
        n /= 3;
    }
    
    return (n === 1) ? true : false;
};