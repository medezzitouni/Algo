const prompt = require("prompt-sync")();

export function processSubArray(a: number[], x: number) {
  let arrays_number = 0;
  let count = new Map<number, number>();
  let q = a.length,
    i = 0;

  count.set(0, 1);
  let p: number[] = [];

  while (i < q) {
    p[i] = i === 0 ? a[0] : p[i - 1] + a[i];
    let l = p[i] - x;

    arrays_number += count.get(l) || 0;

    count.set(p[i], (count.get(p[i]) || 0) + 1);
    i++;
  }

  return arrays_number;
}

export function processSubArray_worse(a: number[], x: number) {
  let arrays_number = 0;
  let q = a.length,
    i = 0;
  let p: number[] = [];

  while (i < q) {
    p[i] = i === 0 ? a[0] : p[i - 1] + a[i];
    let j = 0;
    while (j <= i) {
      if (p[i] - p[j] === x || (p[j] == x && i === j)) {
        arrays_number++;
      }
      j++;
    }

    i++;
  }

  return arrays_number;
}
