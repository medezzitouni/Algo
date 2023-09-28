
type Compare<T> = (a: T, b: T) => boolean;

function mergeSort<T>(arr: T[]): T[] {

    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = arr.splice(0, mid)

    return merge(mergeSort(left), mergeSort(arr));
}

function sort<T>(ar: T[], left: number, right: number): T[] {
    if (left + 1 === right)
        return [ar[left]]

    const mid = Math.floor((left + right) / 2);

    return merge(sort(ar, left, mid), sort(ar, mid, right))
}


function merge<T>(left: T[], right: T[]) {
    const arr: T[] = [];
    let i = 0, j = 0;
    for (; i < left.length && j < right.length;) {
        if (left[i] > right[j]) {
            arr.push(right[j])
            j++;
        }
        else {
            arr.push(left[i])
            i++;
        }
    }

    // if (i < left.length)
    //     for (; i < left.length; i++)
    //         arr.push(left[i])
    // else
    //     if (j < right.length)
    //         for (; j < right.length; j++)
    //             arr.push(right[j])

    return [...arr, ...left.splice(i), ...right.splice(j)];
}

/* this function is O(n^2), cuz the shif and unshift is an O(n), inside a linear for that pushes to arr */
// function merge<T>(left: T[], right: T[]) {
//     let arr: T[] = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift()!);
//         } else {
//             arr.push(right.shift()!);
//         }
//     }

//     return [...arr, ...left, ...right];
// }

const array = [1, 3, 2, 4, 9, 8, 19, 90, 5, 11, 0];
console.log('sort w/o splice', sort(array, 0, array.length));
console.log('sort w/ splice ', mergeSort(array));

// const q = [10, 5, 0, 9].sort((a, b) => a - b)
// const p = [11, 2, 1, 3, 12].sort((a, b) => a - b)
// console.log('====================================');
// console.log(p, q);
// console.log('====================================');
// console.log(merge(q, p));
