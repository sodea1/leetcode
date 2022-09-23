/**
 * @param {number[]} nums
 * @return {number}
 */
// range 0 - n

var missingNumber = function(nums) {
    const set = new Set(nums);
    let size = nums.length;
    for (let i = 0; i <= size; i++) {
        if (!set.has(i)) return i;
    };
};