/**
 * @param {number} numRows
 * @return {number[][]}
 */
// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
// [1, 4, 6, 4, 1]

var generate = function(numRows) {
    const pascal = []; // [[1], ]
    
    for (i = 0; i < numRows; i++) {
        const row = [1];
        
        for (j = 1; j < i; j++) { 
            const above = (pascal[i - 1][j] !== null) ? pascal[i - 1][j] : 0;
            const left = (pascal[i - 1][j - 1] !== null) ? pascal[i - 1][j - 1] : 0;
            row[j] = above + left;
        }
        if (i !== 0) row.push(1);
        pascal.push(row);
    }
    
    return pascal;
};

// let output = [[1]];
//     for (let i = 0; i < numRows - 1; i++) {
//         let x = output[output.length - 1];
//         let row = [1];
//         for (let j = 1; j < x.length; j++) {
//             row.push(x[j]+x[j-1])
//         }
//         row.push(1);
//         output.push(row);
//     }
//     return output;