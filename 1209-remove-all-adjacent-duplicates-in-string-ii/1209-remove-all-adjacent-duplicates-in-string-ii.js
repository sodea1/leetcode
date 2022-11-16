/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//       *
// s = "deeedbbcccbdaa"
// k = 3

var removeDuplicates = function(s, k) {
    let removed = false;
    
    let removals = [];
    let subStr = "";
    while (!removed) {
        removed = true;
        
        for (let i = 0; i < s.length; i++) {
            if (subStr.length === k) {
                // remove
                // set removed = false;
                removals.push(subStr);
                removed = false;
            };
            
            if (subStr.length === 0) {
                subStr += s[i];
            } else {
                if (subStr[0] === s[i]) {
                    subStr += s[i];
                } else {
                    subStr = s[i];
                };
            };        
        };
        
        removals.forEach((sub) => {
            s = s.replace(sub, "");
        });
    };
    
    return s;
};