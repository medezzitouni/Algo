import { expect } from "chai";
import { containsNearbyDuplicate } from ".";
describe("LinkedList Cycle", () => {
  it("has a cycle", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).to.equal(true);
  });
});
