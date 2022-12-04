
var UndergroundSystem = function() {
    this.checkIns = {};
    this.tripTimes = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIn[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkIn[id];
    let totalTime = t - startTime;
    let tripKey = `${startStation}-${stationName}`;
    
    if (this.tripTimes[tripKey]) {
        this.tripTimes[tripKey][0] += totalTime;
        this.tripTimes[tripKey][1]++;
    } else {
        this.tripTimes[tripKey] = [totalTime, 1];
    };    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const [totalTime, tripCount] = this.tripTimes[`${startStation}-${endStation}`];
    return totalTime / tripCount;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */