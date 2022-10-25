/**
 * @param {character[][]} grid
 * @return {number}
 */

// 0 0 1
// 0 1 1
// 1 0 1
// return => 2 islands
// [["1","1","0","0","0"],
// ["1","1","0","0","0"],
// ["0","0","1","0","0"],
// ["0","0","0","1","1"]]

// breadth first search algorithm
// iterate through my grid and 
// keep track of:
    // visited positions
    // create out of bounds
// recursively search until we can't find any other 0's or we're totally out of bounds


var numIslands = function(grid) {
    let numIslands = 0;
    const visited = new Set();
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let found = explore(grid, row, col, visited);
            if (found) numIslands++;
        };
    };
    
    return numIslands;
};

const explore = (grid, row, col, visited) => { // grid, 0, 0
    // check bounds
    const rowBounds = row >= 0 && row < grid.length;
    const colBounds = col >= 0 && col < grid[0].length;
    if (!rowBounds || !colBounds) return false;
    if (grid[row][col] === '0') return false;
    
    const pos = row + "," + col;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, row + 1, col, visited);
    explore(grid, row, col + 1, visited);
    explore(grid, row - 1, col, visited);
    explore(grid, row, col- 1, visited);
    
    return true;
};