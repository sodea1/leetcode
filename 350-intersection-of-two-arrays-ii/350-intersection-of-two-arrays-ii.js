/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// nums1 = [1, 2, 2, 1]
// nums2 = [2, 2]
// map { 2: 2 }
// is key of 1 in map
// no; continue
// is key of 2 in map
// yes; decrement map count for 2
// is 2 in m

var intersect = function(nums1, nums2) {
    const intersection = [];
    const hashmap = {};
    
    let smaller;
    let larger;
    
    if (nums1.length <= nums2.length) {
        smaller = nums1;
        larger = nums2;
    } else {
        larger = nums1;
        smaller = nums2;
    }
    
    for (let i = 0; i < smaller.length; i++) {
        if (smaller[i] in hashmap) {
            hashmap[smaller[i]]++;
        } else {
            hashmap[smaller[i]] = 1;
        }
    };
    
    for (let j = 0; j < larger.length; j++) {
        if (larger[j] in hashmap && hashmap[larger[j]] > 0) {
            intersection.push(larger[j]);
            hashmap[larger[j]]--;
        } else {
            continue;
        };
    };
    
    return intersection;    
};