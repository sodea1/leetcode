/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// matrix = [
// [1,2,3,4],
// [1,1,1,1]
// [9,9,9,9]
// [3,3,3]
// ]

// order of operations: up, right, down, left, up

var spiralOrder = function(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;
    let row = 0;
    let col = 0;
    let res = [];
    
    // operations
    // up: row + 1
    // right: col + 1
    // down: row - 1
    // left: col - 1
    
     const spiral = (row, col, dir) => {
        res.push(matrix[row][col]);
        matrix[row][col] = "x";
        
        if (dir === "up" && row > 0 && matrix[row - 1][col] !== 'x') return spiral(row - 1, col, 'up'); 
        
        if (col + 1 < width && matrix[row][col + 1] !== "x") {
            return spiral(row, col + 1);
        } else if (row + 1 < height && matrix[row + 1][col] !== "x") {
            return spiral(row + 1, col);
        } else if (col > 0 && matrix[row][col - 1] !== "x") {
            return spiral(row, col - 1);
        } else if (row > 0 && matrix[row - 1][col] !== "x") {
            return spiral(row - 1, col, "up");
        }
    }
    
    spiral(row, col);
    return res;
};



