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
    
        // must call twoSumII for every UNIQUE number in nums
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSum(nums,i,triplets);
            // twoSumII(nums, i, triplets);
        };  
    };
    
    return triplets;
};
//                           hi
//                        lo
//       i
// [-4, -3, -3, -1, 0, 1, 1, 2, 2, 4]
                                         // seen = [-1, 0, ]
                                        //               
                                        //               j
                                       //    i        
const twoSum = (nums, i, triplets) => { // [-4,-1,-1,0,1,5] => [[-4, 5, 1]]
    // check if lo and hi sum to the target
    let seen = new Set();
    let j = i + 1;

    while (j < nums.length) {
        let complement = -nums[i] - nums[j];
        if (seen.has(complement)) {
            triplets.push([nums[i], nums[j], complement]);
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                j += 1;
            }
        }
        
        seen.add(nums[j]);
        j++;
    };
}

//                              triplets = [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3]]
                                          //               h
                                          //     i
                                          //             l
// const twoSumII = (nums, i, triplets) => {   // [-4,-1,-1,0,5,5]
//     let lo = i + 1;
//     let hi = nums.length - 1;
    
//     let sum;
//     while (lo < hi) {
//         sum = nums[i] + nums[lo] + nums[hi];
//         if (sum < 0) {
//             // increment lo
//             lo++;
//         } else if (sum > 0) {
//             // decrement hi
//             hi--;
//         } else {
//             triplets.push([nums[i], nums[lo], nums[hi]]);
//             hi--;
//             lo++;
//             // 
//             while (lo < hi && nums[lo] === nums[lo - 1]) {
//                 lo++;
//             }
//         }
//     }
// };