/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const startTimes = [];
    const endTimes = [];
    
    for (let i = 0; i < intervals.length; i++) {
        startTimes.push(intervals[i][0]);
        endTimes.push(intervals[i][1]);
    };
    
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);
    
    let numRooms = 0;
    let endP = 0;
    for (let startP = 0; startP < startTimes.length; startP++) {
        if (startTimes[startP] < endTimes[endP]) {
            // need another room
            numRooms++;
        } else {
            endP++;
        }
    };
    
    return numRooms;
};