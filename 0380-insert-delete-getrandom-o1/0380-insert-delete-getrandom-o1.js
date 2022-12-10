// insert, remove, getRandom
// array insert and getRandom O(1); remove O(1) with pop()
var RandomizedSet = function() {
    this.randomSet = [];
    this.indices = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indices.has(val)) return false;
    this.randomSet.push(val);
    this.indices.set(val, this.randomSet.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indices.has(val)) return false
    let lastVal = this.randomSet.pop();
    if (lastVal !== val) {
        const removalIdx = this.indices.get(val);
        this.randomSet[removalIdx] = lastVal;
        this.indices.set(lastVal, removalIdx);
    };
    
    this.indices.delete(val);    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.randomSet[Math.floor(Math.random() * this.randomSet.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */