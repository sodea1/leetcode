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
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = pascal[pascal.length - 1];
        const shiftLeft = [...prevRow, 0]; //  1,1,0
        const shiftRight = [0, ...prevRow]; // 0,1,1
        let nextRow = shiftLeft.map((r, i) => r + shiftRight[i]);
        pascal.push(nextRow);
    }
    
    return pascal;
};