/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    let minCost = 0;
    
    for (let i = 0; i < costs.length; i++) {
        (i < costs.length / 2) ? minCost += costs[i][0] : minCost += costs[i][1];
    };
    
    return minCost;
};