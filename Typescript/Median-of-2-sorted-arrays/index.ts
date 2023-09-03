export function merge(arr1: number[], arr2: number[]) {
  if (!arr1.length && !arr2.length) return 0;
  else if (!arr1.length) return median(arr2);
  else if (!arr2.length) return median(arr1);

  let i = 0,
    j = 0;
  const arr3: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    for (; i < arr1.length; ++i) {
      arr3.push(arr1[i]);
    }
  } else {
    if (j < arr2.length) {
      for (; j < arr2.length; ++j) {
        arr3.push(arr2[j]);
      }
    }
  }
  return median(arr3);
}

export function median(arr: number[]) {
  const mid = arr.length >>> 1;
  return arr.length % 2 === 1 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

const insert = (arr: number[], index: number, value: number) => [
  ...arr.slice(0, index),
  value,
  ...arr.slice(index),
];
export function merge_worse(arr1: number[], arr2: number[]) {
  if (!arr1.length && !arr2.length) return 0;
  else if (!arr1.length) return median(arr2);
  else if (!arr2.length) return median(arr1);

  let i = 0;

  while (i < arr2.length) {
    let j = 0;
    while (j <= arr1.length) {
      if (arr2[i] > arr1[j]) j++;
      else {
        arr1 = insert(arr1, j, arr2[i]);
        break;
      }
    }
    i++;
  }

  return median(arr1);
}
