

function selection<T>(arr: T[], compare: (a: T, b: T) => boolean): T[] {

    for (let i = 0; i < arr.length; i++) {
        let min_index = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[j], arr[min_index])) {
                min_index = j;
            }
        }

        if (i !== min_index)
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];

    }

    return arr;
}


const arr = [1, 3, 2, 4, 9, 8, 19, 90, 5, 11, 0];
console.log(selection(arr, (a, b) => a < b));
