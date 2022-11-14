
var Leaderboard = function() {
    this.board = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */

Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.board.hasOwnProperty(playerId)) {
        this.board[playerId] += score;
    } else {
        this.board[playerId] = score;
    };

};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    // sort by score
    const unsorted = Object.values(this.board);
    const sorted = unsorted.sort((a, b) => b - a);
    return sorted.slice(0, K).reduce((acc, num) => acc + num);
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.board[playerId] = 0;
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */