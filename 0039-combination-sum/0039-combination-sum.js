/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// [2, 3, 5]
// [[2,2,2,2], [2,3,3], [3,5]]
var combinationSum = function(candidates, target) {
    let results = [];
    backtrack(target, [], 0, candidates, results);
    return results;
};

const backtrack = (remain, comb, start, candidates, results) => {
    if (remain === 0) {
        results.push([...comb]);
        return;
    } else if (remain < 0) return;


    for (let i = start; i < candidates.length; i++) {
        comb.push(candidates[i]);
        backtrack(remain - candidates[i], comb, i, candidates, results);
        comb.pop();
    };
    
};
