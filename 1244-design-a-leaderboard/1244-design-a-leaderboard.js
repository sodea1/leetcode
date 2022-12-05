
var Leaderboard = function() {
    this.board = new Map();
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.board.has(playerId)) {
        this.board.set(playerId, this.board.get(playerId) + score);
    } else {
        this.board.set(playerId, score);
    }
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const topScores = [];
    
    this.board.forEach((score) => {
        topScores.push(score);
    });
    
    topScores.sort((a, b) => b - a);
    return topScores.slice(0, K).reduce((acc, score) => acc + score);
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.board.delete(playerId);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */