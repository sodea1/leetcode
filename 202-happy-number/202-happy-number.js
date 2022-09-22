/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = {};
    
    while (n !== 1) {
        n = sumOfSquares(n);
        if (n in seen) return false;
        seen[n] = true;
    };
    return true;
};

var sumOfSquares = function(n) {
    let sum = 0;
    
    while (true) {
        if (n === 0) return 0;
        let digit = n % 10;
        sum += Math.pow(digit, 2);
        if (n < 10) return sum;
        n = Math.floor(n / 10);
    };
};

