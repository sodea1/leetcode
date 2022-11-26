/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Approach: Three Pointer
//     p
//i
// [2,5,6,0,0,0]
//  j
// [2,5,6]



var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    
    for (let p = m + n - 1; p >= 0; p--) {
        if (p2 < 0) { break; }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};