/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
    let totalSum = nums.reduce((acc, n) => acc + n);
    
    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];
        if (i !== 0) left += nums[i - 1];
        if (left === totalSum) return i;
    }
    
    return -1;
};