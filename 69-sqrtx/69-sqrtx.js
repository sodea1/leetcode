/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1 || x === 2) return 1;
    const upperBound = Math.floor(x / 2);
    console.log(upperBound)
    let i;
    for (i = 1; i <= upperBound; i++) {
        if ((i * i) === x) return i;
        if ((i * i) > x) return i - 1;
    }
    
    return i - 1;
};