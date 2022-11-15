/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
//      a        b
// [[20, 30], [5, 10], [12, 15], [16, 18], [12, 22]]
// start = 20, 5
// end = 30, 10

// brute force: compare every interval pair O(n^2)
// sorting method: sort start times in ascending order, make sure end time is before the next start time

var canAttendMeetings = function(intervals) { // [[16,22],[28,45],[3,9],[46,50],[13,14]]
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < sorted.length - 1; i++) {
        let end = sorted[i][1];
        let start = sorted[i + 1][0];
        
        if (end > start) return false;
    };
    
    return true;
};