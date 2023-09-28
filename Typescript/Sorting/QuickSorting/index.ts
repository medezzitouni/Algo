
function quickSort<T>(arr: T[], left: number = 0, right: number = arr.length - 1) {
    if (left >= right)
        return;

    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
}

function partition<T>(arr: T[], left: number, right: number): number {
    const pivot = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]]
            partitionIndex++;
        }
    }

    [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]]
    return partitionIndex;
}



const ar = [1, 3, 2, 4, 9, 8, 19, 90, 5, 11, 0];
quickSort(ar)
console.log('sort w/o splice', ar);