/**
 * @param {number} x
 * @return {number}
 */

// x = 17 ~ 4.08
//    l  r            
// 2, 3, 4, 5, 6, 7, 8
var mySqrt = function(x) {
    if (x < 2) return x;
    
    let left = 2;
    let right = Math.floor(x / 2);
    
    while (left <= right) {
        let pivot = Math.floor(left + (right - left) / 2);
        let num = pivot * pivot;
        if (num > x) {
            right = pivot - 1;
        } else if (num < x) {
            left = pivot + 1;
        } else {
            return pivot;
        };
    };
    
    return right;
};