/**
 * @param {number[][]} intervals
 * @return {number}
 */

// every overlapping interval requires additional conference rooms
class MinHeap {
    constructor() {
        this.heap = [null];
    };

    size() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[1];
    }

    insert(node) {
        this.heap.push(node);

        if (this.size() > 1) {
            let current = this.heap.length - 1;
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) { 
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
                current = Math.floor(current / 2);
            }
        }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }
}

//           4
//         /
//        9
//
//

var minMeetingRooms = function(intervals) { // [[4,9],[4,17],[9,10]]
    if (intervals.length === 0) return 0;
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const minHeap = new MinHeap();
    minHeap.insert(sorted[0][1]);
    let minRooms = 1;
    
    for (let i = 1; i < sorted.length; i++) {
        const currInterval = sorted[i];
        if (minHeap.getMin() > currInterval[0]) {
            minHeap.insert(currInterval[1])
            minRooms++;
        } else {
            minHeap.remove(minHeap[minHeap.size() - 1]);
            minHeap.insert(currInterval[1]);
        }
    };
    
    return minRooms;
};