const prompt = require("prompt-sync")();

export function processQ(a: number[], n: number, q: number[]) {
  return a.slice(q[0] - 1, q[1]).reduce((x, y) => x + y, 0);
}

const prompt_int = (msg: string) => parseInt(prompt(msg));

export function processQ_cpp(a: number[], qs: number[][]) {
  let q: number = qs.length;
  let s,
    e,
    sum: number[] = new Array(q).fill(0);
  let i = 0;
  while (i < q) {
    s = qs[i][0] - 1;
    e = qs[i][1];
    while (s < e) {
      sum[i] += a[s];
      s++;
    }
    i++;
  }

  return sum;
}

export function processQ_cpp_better(a: number[], qs: number[][]) {
  let q: number = qs.length;
  let sum: number[] = new Array(q).fill(0);
  let s = qs[0][0] - 1,
    e = qs[0][1];
  let i = 0;

  while (i < q) {
    if (s < e) {
      sum[i] += a[s];
      s++;
    } else {
      i++;
      if (i < q) {
        s = qs[i][0] - 1;
        e = qs[i][1];
      }
    }
  }

  return sum;
}

export function processQ_cpp_better2(a: number[], qs: number[][]) {
  let q: number = qs.length;
  let sum: number[] = new Array(q).fill(0);
  let s = qs[0][0] - 1,
    e = qs[0][1];
  let i = 0;
  let p = new Array(a.length).fill(0);

  while (i < a.length) {
    p[i] = i === 0 ? a[0] : p[i - 1] + a[i];
    i++;
  }

  i = 0;
  while (i < q) {
    s = qs[i][0] - 1;
    e = qs[i][1] - 1;
    sum[i] = p[e] - (s ? p[s - 1] : 0);
    i++;
  }

  return sum;
}
