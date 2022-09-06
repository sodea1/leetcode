/**
 * @param {number[]} nums
 * @return {number}
 */
//          *  
// 1, 1, 1, 2, 3, 4, 4, 4, 5
var removeDuplicates = function(nums) {
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};