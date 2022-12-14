/**
 * @param {number} n
 */

var OrderedStream = function(n) {
    this.stream = new Array(n);
    this.pointer = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value;
    let result = [];
    
    while (this.pointer < this.stream.length) {
        if (this.stream[this.pointer]) {
            result.push(this.stream[this.pointer]);
        } else {
            break;
        };
        this.pointer++;
    };
    
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */