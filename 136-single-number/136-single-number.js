/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    const index = {};
    
    for (let num of nums) {
        (num in index) ? index[num] += 1 : index[num] = 1;
    };
    
    return Object.keys(index).find(key => index[key] === 1);
};