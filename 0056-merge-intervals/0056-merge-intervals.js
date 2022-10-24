/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//             i
// [[1, 2], [3, 6], [4, 10], [11, 20]] => [[1, 6], ]
//.   j
// [[1, 2]]

var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    const sorted = intervals.sort(function(a, b) {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] > b[0]) ? 1 : -1;
        };
    })
    const merged = [ sorted[0] ]; // [ [1, 3],  ]
    let j = 0;
    
    for (let i = 1; i < sorted.length; i++) {
        if (merged[j][1] >= sorted[i][0]) {
            //overlap
            let end = (merged[j][1] > intervals[i][1]) ? merged[j][1] : intervals[i][1];
            let merge = [ merged[j][0], end ];
            merged.pop();
            merged.push(merge);
        } else {
            // push on another subarray to merged
            merged.push(sorted[i]);
            j++;
        };
    };
    
    return merged;
};

