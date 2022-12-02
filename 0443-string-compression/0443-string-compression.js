/**
 * @param {character[]} chars
 * @return {number}
 */
//   3
//                           i
// ["a","a","b","b","c","c","c","end"]

var compress = function(chars) {
    const result = [];
    let count = 1;
    
    for (let i = 0; i < chars.length; i++) {
        if (!chars[i + 1]) {
            result.push(chars[i])
            if (count > 1) result.push(...count.toString().split(""));
            break;
        };
        
        if (chars[i + 1] === chars[i]) {
           count++;
        } else {
            if (count > 1) {
                result.push(chars[i]);
                result.push(...count.toString().split(""));
                count = 1;
            } else {
                result.push(chars[i]);
            }
        }
    }
    
    chars.splice(0, chars.length, ...result)
    return chars.length;    
};