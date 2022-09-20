/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const subtractions = { "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900 };
    const numerals = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] + s[i + 1] in subtractions) {
            total += subtractions[s[i] + s[i + 1]];
            i += 1;
        } else {
            total += numerals[s[i]];
        };
    };
    
    return total;
};