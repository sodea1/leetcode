/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const anagrams = {};
    
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        if (!anagrams.hasOwnProperty(sorted)) {
            anagrams[sorted] = [ strs[i] ];
        } else {
            anagrams[sorted].push(strs[i]);
        };
    };
    
    
    return Object.values(anagrams);
};

