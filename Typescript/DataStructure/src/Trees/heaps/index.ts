/**
 * We don't traverasal a heap
 * access children (starting from 0 as the top index)
    * parent index = i => left = 2i + 1, right = 2 * (i + 1)
 * access parent
    * child index = i
        * if i % 2 === 1 => i === left => parent = (i - 1) / 2
        * else if i % 2 === 0 => i === right => parent = (i / 2) - 1
 */

/**
 * insert at the end of the array
 * then bubble-up (swapping) comparing the inserted element to its parents
 * In a MinHeap: swap until the parent is no longer great than inserted element
 * In a MaxHeap: swap until the parent is no longer less than inserted element
 */
export function insert<T>(heap: T[], val: T): number {

    heap.push(val);
    let i = heap.length - 1;
    let parentIndex = (i) % 2 === 1 ? (i - 1) / 2 : (i / 2) - 1;

    while (heap[i] < heap[parentIndex] && i !== 0) {
        [heap[i], heap[parentIndex]] = [heap[parentIndex], heap[i]]
        i = parentIndex;
        parentIndex = (i) % 2 === 1 ? (i - 1) / 2 : (i / 2) - 1;
    }

    return i;
}



/**
 * In a MinHeap: delete the min (top)
    * take the last element put at the heaop top.
    * bubble-down (comparing the two children, swapping the smaller whith the parent)
    * continue until the children are no longer less than the parent
 * In a MaxHeap:
    * vice versa, delete max: (top), then take last element bubble-down (swapping the greater of the children)
    * continue til' the children are no longer great than the parent.
 */
export function remove<T>(heap: T[]): number {

    heap[0] = heap[heap.length - 1];
    heap.pop();
    let i = 0
    let smallerChild = heap[2 * i + 1] <= heap[2 * (i + 1)] ? 2 * i + 1 : 2 * (i + 1);

    while (heap[i] > heap[smallerChild] && i < heap.length) {
        [heap[i], heap[smallerChild]] = [heap[smallerChild], heap[i]]
        i = smallerChild;
        smallerChild = heap[2 * i + 1] <= heap[2 * (i + 1)] ? 2 * i + 1 : 2 * (i + 1);
    }

    return i;
}