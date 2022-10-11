/**
 * @param {number[]} height
 * @return {number}
 */

// currWidth = i - j;
// currHeight = Math.max(i, j)
// must check every subarray of length 2 or more
//             i            
//                      j  
//      i:  0  1  2  3  4
// inputs: [2, 5, 66, 64, 3], n = 5
// line =>  x axis: (i, 0) ; y axis (i, height[i])

//   
//      5   
//      |  4
//      |  |     3
//   2  |  |     |
//   |  |  |  1  |
//   |  |  |  |  |
// 0    

// obj { height: width, h2: w2, ... }
                            //   i:  0 1 2 3 4 5 6 7 8
var maxArea = function(height) { // [1,8,6,2,5,4,8,3,7]
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;
    
    while (start !== end) {
        // calc width
        let width = end - start;
        
        // calc ht
        let ht = Math.min(height[start], height[end]);
        
        if (ht === height[start]) {
            start++;
        } else {
            end--;
        };
        
        let area = width * ht;
        if (maxArea < area) maxArea = area;
    };
    
    return maxArea;
};


// inefficient O(n^2)
// let maxArea = 0;
    
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             // calculate width
//             let width = j - i; // 1
            
//             // calculate height
//             let ht = Math.min(height[j], height[i]); // 2
                
//             // find total area
//             let area = width * ht; // 2
            
//             // check total area against maxArea 
//             if (area > maxArea) maxArea = area;
//         };
//     };
    
//     return maxArea;