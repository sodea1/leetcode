/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// res = 0; // 1
// runningSum = i // 10; if 10 > k, compare i and j, increment or decrement one or other
//             j
//     i
// [1, 2, 2, 5, 11]; k = 5 => 2
 
//. 2. 4   2.  0. 4
// [2, 2, -2, -2, 4] k = 4

var subarraySum = function(nums, k) {
    const map = new Map([[0, 1]])
    let runningSum = 0;
    let total = 0;
    
    for (let num of nums) {
        runningSum += num;
        total += map.get(runningSum - k) || 0;
        map.set(runningSum, map.get(runningSum) + 1 || 1);
    }
    
    return total;
};