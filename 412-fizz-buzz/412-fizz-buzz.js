/**
 * @param {number} n
 * @return {string[]}
 */

// input = integer
// output = [ "", "", ... ]
// iterate 0...n
// if divisible by 3 and 5 => push "Fizzbuzz" to answer
// if divisible by 3 => push "Fizz" to answer
// if divisible by 5 => push "Buzz" to answer
// else push "(i + 1)" to answer
// O(n) = time complexity

// n = 5 => ["1", "2", "Fizz", "4", "Buzz"]
// n = 15 => ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "Fizzbuzz"]

var fizzBuzz = function(n) {
    const answer = [];
    // if n % 15 === 0 => "Fizzbuzz"
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz")
        } else {
            answer.push(i.toString());
        }
    };
    
    return answer;
};