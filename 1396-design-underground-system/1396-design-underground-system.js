
var UndergroundSystem = function() {
    this.checkins = new Map(); // maintain check in info
    this.tripInfo = new Map(); // maintains total time and total trips from key(start-end)
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkins.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkins.get(id);
    this.checkins.delete(id);
    const key = `${startStation}-${stationName}`;
    
    
    if (this.tripInfo.has(key)) {
        let [time, trips] = this.tripInfo.get(key);
        let totalTime = t - startTime + time;
        this.tripInfo.set(key, [totalTime, ++trips]);
    } else {
        this.tripInfo.set(key, [(t - startTime), 1]);
    };
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [time, trips] = this.tripInfo.get(`${startStation}-${endStation}`);
    return time / trips;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */