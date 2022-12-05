/**
 * @param {string[]} transactions
 * @return {string[]}
 */
// "name,time,amount,city"
// Invalid : 
//     > 1000 amount
//     < 60 min, same name, diff city

// map = { 
//   name: [city, time],
//   name: [city, time],
//   ...
// }

var invalidTransactions = function(transactions) {
    const isValid = (transaction, map) => {
        const [name, time, amount, city] = transaction.split(",");
        if (amount > 1000) return true;
        
        const otherTransactions = map.get(name);
        for (const [prevCity, prevTime] of otherTransactions) {
            if (prevCity !== city && (Math.abs(time - prevTime) <= 60)) {
                return true;
            }
        };
        
        return false;
    }
    
    const invalidTransactions = [];
    const map = new Map();
    
    for (const transaction of transactions) {
        const [name, time, , city] = transaction.split(",");
        
        if (map.has(name)) {
            map.get(name).push([city, time]);
        } else {
            map.set(name, [[city, time]]);
        };
    }
    
    for (const transaction of transactions) {
        const invalid = isValid(transaction, map);
        if (invalid) invalidTransactions.push(transaction);
    }
    
    return invalidTransactions;
};