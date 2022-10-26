/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    const indices = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (indices.hasOwnProperty(nums[i])) return [ indices[nums[i]], i ];
        let diff = target - nums[i];
        indices[diff] = i;
    };
};