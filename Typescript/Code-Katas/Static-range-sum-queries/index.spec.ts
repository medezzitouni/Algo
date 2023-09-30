import { expect } from "chai";
import {
  processQ,
  processQ_cpp,
  processQ_cpp_better,
  processQ_cpp_better2,
} from ".";

describe("Static Range Sum Queries", () => {
  const arr: number[] = new Array(15_000_000).fill(47);
  let i = 0;
  let p = new Array(arr.length).fill(0);

  while (i < arr.length) {
    p[i] = i === 0 ? arr[0] : p[i - 1] + arr[i];
    i++;
  }
  const qs = [
    [100, 15_000],
    [2, 30_000],
    [1, 8],
    [3, 100_000],
  ];

  const res = [
    p[qs[0][1]] - p[qs[0][0] - 1],
    p[qs[1][1]] - p[qs[1][0] - 1],
    p[qs[2][1]] - p[qs[2][0] - 1],
    p[qs[3][1]] - p[qs[3][0] - 1],
  ];
  it("correct processQ", () => {
    expect(processQ(arr, arr.length, qs[0])).to.equal(res[0]);
    expect(processQ(arr, arr.length, qs[1])).to.equal(res[1]);
    expect(processQ(arr, arr.length, qs[2])).to.equal(res[2]);
    expect(processQ(arr, arr.length, qs[3])).to.equal(res[3]);
  });

  it("correct processQ_cpp", () => {
    expect(processQ_cpp(arr, qs)).to.eql(res);
  });
  it("correct processQ_cpp_better", () => {
    expect(processQ_cpp_better(arr, qs)).to.eql(res);
  });

  it("correct processQ_cpp_better2", () => {
    expect(processQ_cpp_better2(arr, qs)).to.eql(res);
  });
});
