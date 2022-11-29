/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// CONDITIONS:
    // 3 indices must be different
    // values must sum to 0
    // no duplicate triplets
//                 e
//              s
//           i
// [-4, -2, -2, 0, 2, 4] => [[-4, 0, 4], [-2, -2, 4], [-2, 0, 2]]

var threeSum = function(nums) {
    const triplets = []; // [[-4, 0, 4], [-4, 0, 4], [-2, 0, 2]]
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSumII(nums, i, triplets);
        };
    }
    
    return triplets;
}

var twoSumII = function(nums, currIdx, triplets) {
    let start = currIdx + 1;
    let end = nums.length - 1;
    let sum;
    
    while (start < end) {
        sum = nums[currIdx] + nums[start] + nums[end];
        if (sum === 0) {
            triplets.push([nums[currIdx], nums[start], nums[end]]);
            start++;
            end--;
            
            while (start < end && nums[start] === nums[start - 1]) {
                start++;
            };
        } else if (sum > 0) {
            end--;
        } else if (sum < 0) {
            start++;
        };
    }
}