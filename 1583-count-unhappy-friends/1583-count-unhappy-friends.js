/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
// John = 0
// Kim = 1
// Chris = 2
// Steve = 3

// preferences = [[John: 1, 2, 3], Kim: [2, 0, 3], Chris: [1, 0, 3], Steve: [2, 1, 0]];
// pairs = [[0, 1], [2, 3]]

// [1, 2, ]

// { 0:1, 1:0, 2:3, 3:2 }
//    0    1    2    0

// Kim(1): [2]
// Chris(2): [1, 0]

var unhappyFriends = function(n, preferences, pairs) {
    const pairMap = new Map();
    
    for (let pair of pairs) {
        let [friend1, friend2] = pair;
        pairMap.set(friend1, friend2);
        pairMap.set(friend2, friend1);
    };
    
    let unhappyCount = 0;
    
    for (let friend = 0; friend < n; friend++) {
        let limit = preferences[friend].indexOf(pairMap.get(friend));
        let prefs = preferences[friend].slice(0, limit);
        
        for (let pref of prefs) {
            let prefLimit = preferences[pref].indexOf(pairMap.get(pref));
            let prefPrefs = preferences[pref].slice(0, prefLimit);
            
            if (prefPrefs.includes(friend)) {
                unhappyCount += 1;
                break;
            }
        };
    }
    
    return unhappyCount;
};