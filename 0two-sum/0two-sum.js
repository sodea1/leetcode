/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    const indices = {};
    
    for (let i = 0; i < nums.length; i++) { // 2, 7, 8, 11; target = 9
        let diff = target - nums[i]; // 7
        if (nums[i] in indices) {
            return [ indices[nums[i]], i]
        };
        indices[diff] = i; // 0
    };
};
