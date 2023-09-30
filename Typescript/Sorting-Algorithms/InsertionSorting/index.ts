

function insertion<T>(arr: T[]): T[] {

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while (j > -1 && curr < arr[j]) {
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = curr;
    }

    return arr;
}


console.log(insertion([1, 3, 2, 4, 9, 8, 19, 90, 5, 11, 0]));
