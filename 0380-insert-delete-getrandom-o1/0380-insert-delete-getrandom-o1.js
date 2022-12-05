// 

var RandomizedSet = function() {
    this.nums = [];
    this.valMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valMap.has(val)) return false;
    this.nums.push(val);
    this.valMap.set(val, this.nums.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
// [0, 1]
// pop 1
// [0]
// 
RandomizedSet.prototype.remove = function(val) { 
    if (!this.valMap.has(val)) return false;
    const last = this.nums.pop(); // 1
    const index = this.valMap.get(val); // 0
    this.valMap.delete(val);
    
    if (this.nums.length === index) {
        return true;
    } else {
        this.nums[index] = last;
        this.valMap.set(last, index);
    };
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