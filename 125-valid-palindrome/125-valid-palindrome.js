/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphanum = s.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
    
    let left = 0;
    for (let right = alphanum.length - 1; right > -1; right--) {
        if (alphanum[left] !== alphanum[right]) return false;
        left++;
    }
    
    return true;
};