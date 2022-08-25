/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n === 1 || n === 0) return n;
    if (n in memo) return memo[n];
    
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};