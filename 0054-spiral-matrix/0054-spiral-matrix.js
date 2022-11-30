/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// right: 
// down
// left
// up

// mark visited "x"

// x x x x x
// 2 2 2 2 x
// x 3 3 3 x
// x x x x x

var spiralOrder = function(matrix) {
    const spiralVals = [];
    let row = 0;
    let col = 0;
    
    const spiral = (row, col, dir) => {
        spiralVals.push(matrix[row][col]);
        matrix[row][col] = "x";
        
        if (row > 0 && dir === 'up' && matrix[row - 1][col] !== "x") {
            spiral(row - 1, col, "up");
        }

        // move curr to next position
        if (col < matrix[0].length - 1 && matrix[row][col + 1] !== "x") {
            spiral(row, col + 1);
        } else if (row < matrix.length - 1 && matrix[row + 1][col] !== "x") {
            spiral(row + 1, col);
        } else if (col > 0 && matrix[row][col - 1] !== "x") {
            spiral(row, col - 1);
        } else if (row > 0 && matrix[row - 1][col] !== "x") {
            spiral(row - 1, col, "up");
        } else {
            return;
        }
    }
    
    spiral(row, col);
    return spiralVals;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     let height = matrix.length;
//     let width = matrix[0].length;
//     let row = 0;
//     let col = 0;
//     let res = [];
    
//     // operations
//     // up: row + 1
//     // right: col + 1
//     // down: row - 1
//     // left: col - 1
    
//      const spiral = (row, col, dir) => {
//         res.push(matrix[row][col]);
//         matrix[row][col] = "x";
        
//         if (dir === "up" && row > 1 && matrix[row - 1][col] !== 'x') return spiral(row - 1, col, 'up'); 
        
//         if (col + 1 < width && matrix[row][col + 1] !== "x") {
//             return spiral(row, col + 1);
//         } else if (row + 1 < height && matrix[row + 1][col] !== "x") {
//             return spiral(row + 1, col);
//         } else if (col > 0 && matrix[row][col - 1] !== "x") {
//             return spiral(row, col - 1);
//         } else if (row > 0 && matrix[row - 1][col] !== "x") {
//             return spiral(row - 1, col, "up");
//         }
//     }
    
//     spiral(row, col);
//     return res;
};



