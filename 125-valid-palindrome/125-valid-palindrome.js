/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let noSpaces = "";
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    for (let char of s) {
        if (alpha.includes(char.toLowerCase())) {
            noSpaces += char.toLowerCase();
        }
    }
    return (noSpaces === "") ? true : checkLetters(noSpaces);
};

const checkLetters = (str) => {
    let i = 0;
    
    for (let j = str.length - 1; j > -1; j--) {
        if (i >= j && str[i] === str[j]) return true;
        if (str[i] !== str[j]) return false; 
        i++;
    }
};