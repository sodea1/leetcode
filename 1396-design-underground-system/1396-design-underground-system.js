// checkIn:
//     id, stationName, t
// checkOut
//     id, stationName, t
// getAverageTime
//     startStation
//     endStation
//.  

var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.tripInfo = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkIns.get(id);
    this.checkIns.delete(id);
    let key = `${startStation}-${stationName}`;
    let totalTime = t - startTime;
    
    if (this.tripInfo.has(key)) {
        let prevTime = this.tripInfo.get(key)[0];
        let prevTrips = this.tripInfo.get(key)[1];
        prevTime += totalTime;
        prevTrips++;
        this.tripInfo.set(key, [prevTime, prevTrips]);
    } else {
        this.tripInfo.set(key, [totalTime, 1]);
    }
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