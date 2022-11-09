/**
 * @param {number[][]} costs
 * @return {number}
 */

// 2n people interviewing
// costs = [[costA, costB]]
// costA = cost of flying person i to city a
// costB = cost of flying person i to city b

// n people in city A
// n people in city B

// [[50, 70], [30, 90], [100, 90], [200, 105]];
// 4 people
// two cities; 2 ppl / city

var twoCitySchedCost = function(costs) {
    let totalCost = 0;
    
    let sorted = costs.sort((a, b) => {
        if (a[0] - a[1] < b[0] - b[1]) {
            return -1;
        } else {
            return 1;
        }
    });
    
    for (let i = 0; i < sorted.length; i++) {
        totalCost += (i <= (sorted.length / 2) - 1) ? sorted[i][0] : sorted[i][1]
    };
    
    return totalCost;
};