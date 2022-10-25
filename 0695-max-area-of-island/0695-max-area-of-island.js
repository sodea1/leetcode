/**
 * @param {number[][]} grid
 * @return {number}
 */

// breadth first search
// recursively
// O(n^2) time complexity

var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    let maxArea = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const area = explore(grid, row, col, visited);
            if (area > maxArea) maxArea = area;
        };
    };
    
    return maxArea;
};

const explore = (grid, row, col, visited) => {
    const rowBounds = row >= 0 && row < grid.length;
    const colBounds = col >= 0 && col < grid[0].length;
    if (!rowBounds || !colBounds) return 0;
    if (grid[row][col] === 0) return 0;
    
    const pos = row + "," + col;
    if (visited.has(pos)) {
        return 0;
    };
    visited.add(pos);
    
    return 1 + explore(grid, row + 1, col, visited) +
    explore(grid, row - 1, col, visited) +
    explore(grid, row, col + 1, visited) +
    explore(grid, row, col - 1, visited);  
};