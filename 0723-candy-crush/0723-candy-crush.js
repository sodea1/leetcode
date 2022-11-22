/**
 * @param {number[][]} board
 * @return {number[][]}
 */

//   *
// 1 2 3 4 5
// 2 2 3 5 4
// 2 1 3 5 5 

var candyCrush = function(board) {
    if (!board) return board;
    let isCrushed = true;
    
    // mark rows
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length - 2; col++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row][col + 1]);
            let num3 = Math.abs(board[row][col + 2]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                isCrushed = false;
                board[row][col] = -num1;
                board[row][col + 1] = -num2;
                board[row][col + 2] = -num3;
            };
        };
    };
    
    // mark cols
    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length - 2; row++) {
            let num1 = Math.abs(board[row][col]);
            let num2 = Math.abs(board[row + 1][col]);
            let num3 = Math.abs(board[row + 2][col]);
            
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                isCrushed = false;
                board[row][col] = -num1;
                board[row + 1][col] = -num2;
                board[row + 2][col] = -num3;
            };
        };
    };
    
    //         i
    //         r
    // 1 2 4 5 0
    // collapse board
    if (!isCrushed) {
        for (let col = 0; col < board[0].length; col++) { // c = 0, idx = 9, row = 9
            let idx = board.length - 1;
            for (let row = board.length - 1; row >= 0; row--) {
                if (board[row][col] > 0) {
                    board[idx][col] = board[row][col];
                    idx--;
                }
            };
            
            for (let row = idx; row >= 0; row--) {
                board[row][col] = 0;
            }
        };
    };
    
    if (!isCrushed) return candyCrush(board);
    return board;
};
