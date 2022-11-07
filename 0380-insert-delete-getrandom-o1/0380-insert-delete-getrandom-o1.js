
var RandomizedSet = function() {
    this.map = new Map();
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    this.map.delete(val);
    const last = this.nums.pop();
    if (this.nums.length === idx) return true;
    this.map.set(last, idx);
    this.nums[idx] = last;
    return true;
};

/**
 * @return {number}
 */

RandomizedSet.prototype.getRandom = function() {
    if (this.nums.length === 0) return null;
    return this.nums[Math.floor((Math.random() * this.nums.length))];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */