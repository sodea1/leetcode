/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const diffs = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in diffs) return [diffs[nums[i]], i];
        let diff = target - nums[i];
        diffs[diff] = i;
    };
    
    return null;
};