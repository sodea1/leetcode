/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// [1, 2, 3, 4, 5, 6, 7, 10]
// pivIdx = 3
// [4, 5, 6, 7, 10, 1, 2, 3,]
// target = 2
// return = 6

var search = function(nums, target) { // [4,5,6, 7 ,0,1,2]
    let p1 = 0;
    let p2 = nums.length - 1;
    
    while (p2 >= p1) {
        let pivot = p1 + Math.floor((p2 - p1) / 2);
        if (nums[pivot] === target) {
            return pivot;
        } else if (nums[p1] <= nums[pivot]) {
            // non rotated subarray
            if (target >= nums[p1] && target < nums[pivot]) {
                p2 = pivot - 1;
            } else {
                p1 = pivot + 1;
            }
        } else {
            if (target <= nums[p2] && target > nums[pivot]) {
                p1 = pivot + 1;
            } else {
                p2 = pivot - 1;
            };
        }
    };
    
    return -1;
};