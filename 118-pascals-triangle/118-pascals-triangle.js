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
    const pascal = [[1]]; // [[1], ]
    
    for (i = 0; i < numRows - 1; i++) {
        const row = [1];
        let prev = pascal[pascal.length - 1];
        
        for (let j = 1; j < prev.length; j++) {
            row.push(prev[j] + prev[j - 1]);
        }
        row.push(1);
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