/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// badc
// baba

b => b
a => a
d => b
c => a

var isIsomorphic = function(s, t) {
    const hash = {};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash && hash[s[i]] !== t[i]) return false;
        if (!(s[i] in hash) && Object.values(hash).includes(t[i])) return false;
        hash[s[i]] = t[i];
    }
    
    return Object.values(hash).length === Object.keys(hash).length;
    
    let obj1 = {};
    let obj2 = {};
    
    for (let i = 0; i < s.length; i++){
        if (obj1[s[i]] !== obj2[t[i]]){
            return false;
        } else {
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
};

