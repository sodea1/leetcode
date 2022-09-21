/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let sum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        sum = sum * 26;
        sum += alpha.indexOf(columnTitle[i]) + 1;
    };
    
    return sum;
};