/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const map = new Map(); // { l: [0,1], e: [6,3]}
    
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            // map doesn't have letter
            map.set(s[i], [i, 1]);
        } else {
            // map does have letter
            map.set(s[i], [i, map.get(s[i])[1] + 1])
        }
    };
    
    let index = Infinity;
    let result = null;
    
    map.forEach((val) => {
        if (val[1] === 1 && val[0] < index) {
            result = val[0];
            index = result;
        }
    })
    
    return result !== null ? result : -1;
};
