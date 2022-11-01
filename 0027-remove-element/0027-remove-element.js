/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//                         *
//                    *
// [1, 6, 4, 3, 5, 1, 1, 3]

var removeElement = function(nums, val) {
    let write = 0;
    
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== val) {
            nums[write] = nums[read];
            write++;
        };
    };
    
    return write;
};