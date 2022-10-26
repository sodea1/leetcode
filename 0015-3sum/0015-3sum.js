/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// CONDITIONS:
    // 3 indices must be different
    // values must sum to 0
    // no duplicate triplets
//


var threeSum = function(nums) { 
    nums = nums.sort((a, b) => a - b);          
    const triplets = [];
    
    for (let i = 0; i < nums.length; i++) {   // [-1,0,1,2,-1,-4,-2,-3,   3,0,4]
        if (nums[i] > 0) {
            break;
        };
    
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSumII(nums, i, triplets);
        };
    };
    
    return triplets;
    
};
//                              triplets = [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3]]
                                          //                                        h
                                          //         i
                                          //                        l
const twoSumII = (nums, i, triplets) => {   // [-4, -3, -2, -1, -1, 0,  0,  1,  2,  3, 4]
    let lo = i + 1;
    let hi = nums.length - 1;
    
    while (lo < hi) {
        let sum = nums[i] + nums[lo] + nums[hi];
        if (sum === 0) {
            triplets.push([ nums[i], nums[lo], nums[hi] ]);
            lo++;
            hi--;
            while (lo < hi && nums[lo] === nums[lo - 1]) {
                lo++;
            }
        } else if (sum > 0) {
            hi--;
        } else {
            lo++;
        }
    };
};