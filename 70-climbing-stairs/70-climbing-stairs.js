/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 2) return 2;
    if (n === 1) return 1;
    
    memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo)
    return memo[n];
};


//          5
//        /   \
//       4.     3
//      / \    / \
//     3.  2   2  1
//    / \. /\  /\. \
//   
