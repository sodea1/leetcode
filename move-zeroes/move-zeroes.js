/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//              *
//     *
// [4, 5, 0, 0, 5, 0] => [1,2,5,6,0,0]

var moveZeroes = function(nums) {
    let start = 0;
    
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
        }
    }
    
    return nums;
};