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
    const vals = [];
    
    this.stream[idKey - 1] = value;
    
    if (this.stream[this.pointer]) {
        while (this.pointer <= this.stream.length) {
            if (typeof this.stream[this.pointer] === "undefined") return vals;
            vals.push(this.stream[this.pointer]);
            this.pointer++;
        }
    };
    
    return vals;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */