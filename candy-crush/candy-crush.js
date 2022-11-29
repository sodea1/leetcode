/**
 * @param {number[][]} board
 * @return {number[][]}
 */

//   
// 1 0 0 0 2
// 0 0 0 5 4
// 2 0 3 5 5 

var candyCrush = function(board) {
    if (!board) return board;
    let isCrushed = true;
    
    // mark rows 
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length - 1; col++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row][col + 1]);
            let num3 = Math.abs(board[row][col + 2]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                // mark for crushing
                isCrushed = false;
                board[row][col] = -num1;
                board[row][col + 1] = -num2;
                board[row][col + 2] = -num3;
            }
        }
    }
    
    // mark col
    for (let row = 0; row < board.length - 2; row++) {
        for (let col = 0; col < board[0].length; col++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row + 1][col]);
            let num3 = Math.abs(board[row + 2][col]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                // mark for crushing
                isCrushed = false;
                board[row][col] = -num1;
                board[row + 1][col] = -num2;
                board[row + 2][col] = -num3;
            }
        }
    }
    
    // collapse the board
    if (!isCrushed) {
        for (let col = 0; col < board[0].length; col++) {
            let shiftingRow = board.length - 1;
            for (let row = board.length - 1; row >= 0; row--) {
                if (board[row][col] > 0) {
                    board[shiftingRow][col] = board[row][col];
                    shiftingRow--;
                }
            }
            
            for (let row = shiftingRow; row >= 0; row--) {
                board[row][col] = 0;
            };
        };
        
        return candyCrush(board);
    };
    
    return board;
};