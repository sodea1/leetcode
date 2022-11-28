/**
 * @param {character[]} chars
 * @return {number}
 */
//.                          *
// ["a","a","b","b","c","c","c", "end", "a", "2", "b", "2", "c", "3" ]
var compress = function(chars) {
    chars.push("end");
    let count = 1;
    
    for (let i = 0; i < chars.indexOf("end"); i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
            continue;
        };
        
        chars.push(chars[i]);
        if (count !== 1) {
            chars.push(...count.toString().split(""));
        }
        count = 1;
    };
    
    chars.splice(0, chars.indexOf("end") + 1);
    
    return chars.length;
};

    
    