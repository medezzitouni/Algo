export function convert(str: string, rows: number) {
  let zig: string[][] = new Array(rows).fill([null]).map(() => []);

  let i = 0;
  let s = str.length;

  let k = 1,
    m = 0,
    n = 0;

  while (i < s) {
    zig[m][n] = str[i];

    if (m == rows - 1) k = -1;
    if (m == 0) k = 1;

    m += k;
    if (k < 0) n++;

    i++;
  }

  return zig.reduce((x, y) => x.concat(y.join("")), "");
}
