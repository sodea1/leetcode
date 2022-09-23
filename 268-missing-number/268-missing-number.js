/**
 * @param {number[]} nums
 * @return {number}
 */
// range 0 - n

var missingNumber = function(nums) {
    const set = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) return i;
    };
};