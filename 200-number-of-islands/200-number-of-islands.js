/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    let islandCount = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (explore(grid, row, col, visited) === true) islandCount++;
        };
    };
    
    return islandCount;
};

var explore = function(grid, row, col, visited) {
    const rowBounds = row >= 0 && row < grid.length;
    const colBounds = col >= 0 && col < grid[0].length;
    if (!rowBounds || !colBounds) return false;
    if (grid[row][col] === "0") return false;
    
    const pos = row + "," + col;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, row + 1, col, visited);
    explore(grid, row - 1, col, visited);
    explore(grid, row, col + 1, visited);
    explore(grid, row, col - 1, visited);
    
    return true;
};