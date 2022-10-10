/**
 * @param {number} x
 * @return {number}
 */

// input = integer
// output = reversed integer
// check reversed integer's size; possibly turn to 0
// Brute Force Approach
    // time complexity O(n)
    // space complexity O(1)

var reverse = function(x) {
    const numStr = x.toString(); // '123'
    const reversedDigits = numStr.split("").reverse(); // ['3', '2', '1', '-']
    if (x < 0) reversedDigits.pop();
    
    let reversedNum = Number(reversedDigits.join("")); // '321' => 321
    // check sign
    if (x < 0) {
        reversedNum *= -1; // 321
    };
        
    // check signed 32-bit range
    if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31)) {
        return 0;
    };
    return reversedNum;
};