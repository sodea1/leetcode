/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// index = integer
// needleP
// hayP
//            *
// needle: "aaa"

//                 *           
// haystack: "aaa";
// return index of 3

// if pointers are equal and needle index = 0, then save hayP to index variable
// if pointers are equal, increment both 
// if pointers are unequal, set needle pointer to 0 and increment haystack pointer
// if pointers are equal and needle pointer === needle.length - 1
    // found the needle

// time complexity: O(n)

//   *    
// "mi  ssissippi"
//  *
// "issip"

// get index of first letter
// slice from first index + length of needle and check if the resulting string is equal to the needle arg
// if isnt, mississipi should become "ssissipi", buffer var should += index and try to find the first letter again
// return the buffer plus the index at the end

// "sadbutsad"
// "sad"

var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1;
    
    let buffer = 0;
    const first = needle[0]; // "s"
    let haystackArr = haystack.split(""); // [s a d b u t s a d]
    while (haystackArr.indexOf(first) !== -1) {
        if (haystackArr.length < needle.length) break;
        
        let index = haystackArr.indexOf(first);
        
        let subStr = haystackArr.slice(index, index + needle.length);
        if (subStr.join("") === needle) {
            return index + buffer;
        } else {
            haystackArr = haystackArr.slice(index + 1);
            haystack = haystackArr.join("");
            buffer += (index + 1);
        };
    };
    
    return -1;
};