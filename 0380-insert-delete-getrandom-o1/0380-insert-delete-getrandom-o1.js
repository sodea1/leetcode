
var RandomizedSet = function() {
    this.indicesMap = new Map();
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indicesMap.has(val)) return false;
    this.indicesMap.set(val,this.nums.length);
    this.nums.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indicesMap.has(val)) return false;
    const idx = this.indicesMap.get(val);
    this.indicesMap.delete(val);
    const last = this.nums.pop();
    if (this.nums.length === idx) return true;
    this.indicesMap.set(last, idx);
    this.nums[idx] = last;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */