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
    nums.sort((a, b) => a - b);
    const triplets = []; // triplet combos non unique that sum to zero
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        };
    
        if (nums[i - 1] !== nums[i]) {
            twoSumII(nums, i, triplets);
        };        
    };
    
    return triplets;
};
//                              triplets = [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3]]
                                          //               h
                                          //           i
                                          //             l
const twoSumII = (nums, i, triplets) => {   // [-4,-1,-1,0,1,2]
    let lo = i + 1;
    let hi = nums.length - 1;
    
    let sum;
    while (lo < hi) {
        sum = nums[i] + nums[lo] + nums[hi];
        if (sum < 0) {
            // increment lo
            lo++;
        } else if (sum > 0) {
            // decrement hi
            hi--;
        } else {
            triplets.push([nums[i], nums[lo], nums[hi]]);
            hi--;
            lo++;
            while (lo < hi && nums[lo] === nums[lo - 1]) {
                lo++;
            }
        }
    }
};