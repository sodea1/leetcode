/**
 * @param {number[][]} costs
 * @return {number}
 */
//                  1th
// costs = [[a,b], [a,b]...]
// a and b represent different costs to fly to different cities
// [[20, 50], [50, 70], [100, 20], [200, 80]];
//     -30       -20       +80.        +120

var twoCitySchedCost = function(costs) {
    let totalCosts = 0;
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    for (let i = 0; i < costs.length; i++) {
        if (i < Math.floor(costs.length / 2)) {
            // take a
            totalCosts += costs[i][0];
        } else {
            // take b
            totalCosts += costs[i][1];
        }
    }
    
    return totalCosts;
};