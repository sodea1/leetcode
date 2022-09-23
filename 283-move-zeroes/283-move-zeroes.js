/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [0, 1, 0, 3, 12]
// [0, 0, 0, 2, 3]
// [1, 0, ]
// [1, 2, 3]
var moveZeroes = function(nums) {
    let start = 0;
    
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
        };
    };
    
    return nums;
};