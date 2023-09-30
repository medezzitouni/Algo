import { expect } from "chai";
import { processSubArray_worse as processSubArray } from ".";

describe("Subrray-sums", () => {
  const arr: number[] = [1, 3, 11, 2, 1]; // [1, 3, 5, 11, 1, 1, 4, 9]; // new Array(15_000_000).fill(47);
  let i = 0; //[2, -1, 3, 5, -2]

  it("correct processQ_cpp", () => {
    expect(processSubArray(arr, 3)).to.equal(2);
    // expect(processSubArray(arr, 4)).to.equal(2);
  });
});
