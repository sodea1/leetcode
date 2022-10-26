/**
 * @param {number[]} height
 * @return {number}
 */

//
// 

var maxArea = function(height) { // [1,8,6,2,5,4,8,3,7]
    
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i < j) {
        // calculate area of current container
        let area = (j - i) * Math.min(height[i], height[j]);
        maxArea = (area > maxArea) ? area : maxArea;
        
        // increment/decrement based on comparison of each current wall height
        (height[i] <= height[j]) ? i++ : j--;
    };
    
    return maxArea;
};
