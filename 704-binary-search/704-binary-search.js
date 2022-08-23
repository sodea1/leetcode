/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let start = 0;
    let stop = nums.length - 1;
    
    return binarySearch(nums, start, stop, target)
}

var binarySearch = function(nums, start, stop, target) {
    console.log(stop)
    console.log(start)
    if (start <= stop) {
        const mid = start + Math.floor(((stop - start) / 2));
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            //search left
            return binarySearch(nums, start, mid - 1, target);
        } else if (nums[mid] < target) {
            // search right
            return binarySearch(nums, mid + 1, stop, target);
        }
    }
        
    return -1;
}