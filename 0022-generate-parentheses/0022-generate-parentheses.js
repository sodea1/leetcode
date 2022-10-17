/**
 * @param {number} n
 * @return {string[]}
 */

// n = 3 => (((
// ((()))
// (()) ()
// () (())
// () () ()

// n = 3
// 0, 0, ""
// "("
var generateParenthesis = function(n) {
    const result = [];
    backtracking(0, 0, "");
    return result;
    
    function backtracking(open, close, curr) {
        if(close > open || open > n) return;
        if(open == n && close == n) {
            result.push(curr)
            return
        };
        
        backtracking(open + 1, close, curr + "(");
        backtracking(open, close + 1, curr + ")");
    };
};