/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = [i, 1];
        } else {
            map[s[i]][1]++;
        };
    };
    
    const vals = Object.values(map);
    for (let j = 0; j < vals.length; j++) {
        if (vals[j][1] === 1) {
            return vals[j][0];
        }
    };
    
    return -1;
};
