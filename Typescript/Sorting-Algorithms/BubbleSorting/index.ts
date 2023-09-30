

function bubble<T>(arr: T[]): T[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
    }

    return arr;
}


console.log(bubble([1, 3, 2, 4, 9, 8, 19, 90, 5, 11, 0]));
