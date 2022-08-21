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
};

