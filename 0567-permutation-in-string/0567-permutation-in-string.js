/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// find all permutations of s1
// for each permutation, check for inclusion in s2 
// "abc"
//       *
// "dleibfcasl"
// [ t , t , t ] => return true
// if true value exists already, 
    
var checkInclusion = function(s1, s2) {
    let len1 = s1.length;
    let sorted = s1.split("").sort().join("");
    let result = false;
    
    for (let i = 0; i < s2.length; i++) {
        if (!s2[i + len1 - 1]) break;
        if (s2.slice(i, i + len1).split("").sort().join("") === sorted) {
            result = true;
            break;
        };
    };
    
    return result;
};

