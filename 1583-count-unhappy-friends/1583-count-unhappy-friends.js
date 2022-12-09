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
        
    for (let friend = 0; friend < n; friend++) {
        let prefIdx = preferences[friend].indexOf(pairMap.get(friend));
        if (prefIdx === 0) {
            pairMap.delete(friend);
            continue;
        }; // friend got paired with first preference
        
        let preferred = [];
        while (prefIdx > 0) {
            prefIdx--;
            preferred.push(preferences[friend][prefIdx]);
        };
        
        pairMap.set(friend, preferred);
    };
    
    let unhappyCount = 0;
    let unhappyFriends = [];
    
    for (const [friend, prefs] of pairMap) {
        for (let pref of prefs) {
            if (pairMap.has(pref) && pairMap.get(pref).includes(friend)) {
                if (!unhappyFriends.includes(friend)) {
                    unhappyCount++;
                    unhappyFriends.push(friend);
                };
                
                if (!unhappyFriends.includes(pref)) {
                    unhappyCount++;
                    unhappyFriends.push(pref);
                };
            }
        }
    }
    
    return unhappyCount;
};