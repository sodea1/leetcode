/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Approach: 
// {d:1, g: -1, }
//   *
// 'doggy'; if Map has char, "++" else "= 1"
// 'gygod'; if Map(char) === 1, delete the char in Map else "--", reset Map(char)
// 

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map(); // { d: 1, o: 1, g: 2, y: 1 }
    
    for (let i = 0; i < s.length; i++) { // 'd  oggy'
        let value = map.get(s[i]);
        if (value) {
            value++;
            map.set(s[i], value);
        } else {
            map.set(s[i], 1);
        }
    };
    
    for (let i = 0; i < t.length; i++) {
        let val = map.get(t[i]);
        if (!val) return false;
        if (val === 1) {
            map.delete(t[i]);
        } else {
            val--;
            map.set(t[i], val);
        };
    };
    
    return map.size === 0;
};