/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const run = [];
    
    let sum = 0;
    for (let num of nums) {
        sum += num;
        run.push(sum);
    };
    
    return run;
};