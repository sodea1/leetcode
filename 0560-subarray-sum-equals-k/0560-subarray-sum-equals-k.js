/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// { 0:1, 1:1, 3:1, 4:1, 6:1, 7:1 }
//.  
// currRunningSum = 3 where (3 - k) = 0
//           *
// [1, 2, 1, 2, 1]
// k = 3

var subarraySum = function(nums, k) {
    const map = new Map([[0, 1]]);
    let runningSum = 0;
    let count = 0;
    
    for (let num of nums) {
        runningSum += num;
        count += map.get(runningSum - k) || 0;
        map.set(runningSum, map.get(runningSum) + 1 || 1);
    };
    return count;
};