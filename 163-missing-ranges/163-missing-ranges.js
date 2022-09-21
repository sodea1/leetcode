/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

// nums = [0,1,3,50,75]
// 0 - 99
// 99

var findMissingRanges = function(nums, lower, upper) {
    let missingRanges = [];
  
    for (let i = -1; i < nums.length; i++) {
        let lo = nums[i] === undefined ? lower - 1 : nums[i];
        let hi = nums[i + 1] === undefined ? upper + 1 : nums[i + 1];
        console.log(lo)
        console.log(hi)
        switch (hi - lo) {
            case 0:
                continue;
            case 1:
                continue;
            case 2:
                missingRanges.push(`${lo + 1}`);
                break;
            default:
                missingRanges.push(`${lo + 1}->${hi - 1}`);
        }
    }
    
    return missingRanges;
};