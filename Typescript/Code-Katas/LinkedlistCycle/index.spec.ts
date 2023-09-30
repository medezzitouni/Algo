import { expect } from "chai";
import { ListNode, hasCycle } from ".";
describe("LinkedList Cycle", () => {
  it("has a cycle", () => {
    expect(hasCycle(new ListNode().ofArray([3, 2, 0, -4], 1))).to.equal(true);
    expect(hasCycle(new ListNode().ofArray([1, 2], 0))).to.equal(true);
  });

  it("has no cycle", () => {
    expect(hasCycle(new ListNode().ofArray([1]))).to.equal(false);
  });
});
