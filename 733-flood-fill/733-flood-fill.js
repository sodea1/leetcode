/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image;
    const initVal = image[sr][sc];
    const queue = [[sr, sc]];
    const visited = new Set();
    
    while (queue.length !== 0) {
        let current = queue.shift(); // shift first ele
        let [r, c] = current; // destructure row and col
        
        const position = r + "," + c;
        if (visited.has(position)) continue;
        visited.add(position);
        
        // set new value if starting pos value is equal to current pos value
        if (image[r][c] === initVal) {
            image[r][c] = color
        } else {
            continue;
        }
        
        if (r < image.length - 1) queue.push([r + 1, c]);
        if (r > 0) queue.push([r - 1, c]);
        if (c < image[0].length - 1) queue.push([r, c + 1]);
        if (c > 0) queue.push([r, c - 1]);
    }
    
    return image;
};