/**
 * @param {number} numRows
 * @return {number[][]}
 */

// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
// [1, 4, 6, 4, 1]

var generate = function(numRows) { // 5
    if (!numRows || numRows <= 0) return [];
    
    const pascal = [[1]];
    
    for (let i = 1; i < numRows; i++) { // [1, 2, 1] => [1, 3, 3, 1]
        let prev = pascal[i - 1]; // [1, 2, 1]
        let newRow = [1];
        for (let j = 1; j < prev.length; j++) {
            newRow.push(prev[j] + prev[j - 1]);
        };
        newRow.push(1);
        pascal.push(newRow);
    };
    
    return pascal;
};