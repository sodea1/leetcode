/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// insert  4
//              *
//  *     m 
// [2, 3, 5, 6, 7]

var searchInsert = function(nums, target) { // [1,3,5,6] ; 5
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        if (nums[end] < target) return end + 1;
        if (nums[start] > target) return start;
        let mid = start + Math.floor((end - start) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        };
    };
};