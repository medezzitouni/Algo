import { expect } from "chai";
import { merge_worse as merge } from ".";

describe("find median", () => {
  const a1: number[] = [1, 2];
  const a2: number[] = [3, 4];

  it("median", () => {
    expect(merge(a1, a2)).to.equal(2.5);
    expect(merge([1, 3], [2])).to.equal(2);
    expect(merge([], [])).to.equal(0);
    expect(merge([1, 3], [])).to.equal(2);
    expect(merge([], [5, 1])).to.equal(3);
  });
});
