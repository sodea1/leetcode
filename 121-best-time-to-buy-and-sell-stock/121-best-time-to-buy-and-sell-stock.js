/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    let difference;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            continue;
        }
        difference = prices[i] - min;
        if (difference > maxProfit) maxProfit = difference;
    };
    
    return maxProfit;
};