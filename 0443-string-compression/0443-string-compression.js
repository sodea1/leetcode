/**
 * @param {character[]} chars
 * @return {number}
 */
//   3
//                           i
// ["a","a","b","b","c","c","c","end"]

var compress = function(chars) {
    chars.push("end");
    let count = 1;
    let spliceIdx;
    
    for (let i = 0; i < chars.length; i++) {
        if (chars[i + 1] === "end") {
            chars.push(chars[i])
            if (count > 1) chars.push(...count.toString().split(""));
            spliceIdx = i + 2;
            break;
        };
        
        if (chars[i + 1] === chars[i]) {
           count++;
        } else {
            if (count > 1) {
                chars.push(chars[i]);
                chars.push(...count.toString().split(""));
                count = 1;
            } else {
                chars.push(chars[i]);
            }
        }
    }
    console.log(chars)
    chars.splice(0, spliceIdx)
    return chars.length;    
};