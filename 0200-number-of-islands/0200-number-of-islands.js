/**
 * @param {character[][]} grid
 * @return {number}
 */

// DFS on each pos(row, col)
// mark visited
// 

var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            count += explore(row, col, grid, visited) ? 1 : 0;
        }
    };
    
    return count;
};

const explore = (row, col, grid, visited) => {
    const rowBounds = row >= 0 && row < grid.length;
    const colBounds = col >= 0 && col < grid[0].length;
    if (!rowBounds || !colBounds) {
        return false;
    };
    
    if (grid[row][col] === '0') {
        return false;
    };
    
    const pos = row + "," + col;
    if (visited.has(pos)) {
        return false;
    };
    visited.add(pos);
        
    explore(row + 1, col, grid, visited);
    explore(row - 1, col, grid, visited);
    explore(row, col + 1, grid, visited);
    explore(row, col - 1, grid, visited);
    
    return true;
}
