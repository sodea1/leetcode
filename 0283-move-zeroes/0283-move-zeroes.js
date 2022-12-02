/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//          *
//      *
// [1,3,12,0,0] => [1,3,12,0,0]

var moveZeroes = function(nums) {
    let start = 0;
    
    for (let end = 0; end < nums.length; end++) {
        if (nums[end]) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
        };
    }
    
    return nums;
};