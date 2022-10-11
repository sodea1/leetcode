/**
 * @param {string} s
 * @return {string}
 */

// Expand from Center
// input: "string"
// output: "" string representing the longest substring in the input string
// case 1: "aba" => "aba"
// case 1: "clpbstanleyyelnatsxy" => "stanleyyelnats"
// case 1: "string" => ""

//  helper(3, 3, "clpbstanleyyelnatsxy")
//.   j
//   i                  
// "abba"
// iterate through s
    // invoke helper function that returns longest palindrome by expanding around a center that's determined by the index defined in the loop
        // inputs: start, end, s
        // outputs: palindrome substring or ""
        // if s is even: end = start + 1
        // if s is odd: end = start

var longestPalindrome = function(s) {
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        let even = subStrPals(i, i + 1, s);
        let odd = subStrPals(i, i, s);
        let longerStr = (even.length >= odd.length) ? even : odd;
        if (longerStr.length > longest.length) longest = longerStr;
    };
    
    return longest;
};

function subStrPals(start, end, s) { // 3, 4, "clpbstanleyyelnatsxy"
    let longestStr = "";
    
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        let sub = s.substring(start, end + 1);
        if (sub.length > longestStr.length) longestStr = sub;
        start--;
        end++;
    };
    
    return longestStr;
};