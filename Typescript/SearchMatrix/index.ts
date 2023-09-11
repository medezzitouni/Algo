export function searchMatrix(matrix: number[][], target: number): boolean {
  let h = matrix.length - 1,
    rowLen = matrix[0].length - 1,
    f = 0;

  if (target < matrix[0][0] || target > matrix[h][rowLen]) return false;

  let l = 0,
    s = h;
  let mid = 0;

  while (l <= h) {
    mid = (l + h) >>> 1;

    if (target >= matrix[mid][0] && target <= matrix[mid][rowLen]) {
      s = 0;
      f = rowLen + 1;
      break;
    } else {
      if (target < matrix[mid][0]) h = mid - 1;
      else l = mid + 1;
    }
  }

  let row = matrix[mid];

  while (s <= f) {
    mid = (s + f) >>> 1;
    if (target === row[mid]) {
      return true;
    } else {
      if (target < row[mid]) f = mid - 1;
      else s = mid + 1;
    }
  }

  return false;
}
