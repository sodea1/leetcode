/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    const index = {};
    
    for (let num of nums) {
        (num in index) ? delete index[num] : index[num] = 1;
    };
    
    return Object.keys(index)[0];
};