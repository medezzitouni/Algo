import { expect } from "chai";
import { CharOccurency } from ".";

describe("Char Occ", () => {
  it("should be true", () => {
    expect(CharOccurency("abca", "a")).to.be.equal(2);
    expect(CharOccurency("abacapoiakmmmakkkj", "a")).to.be.equal(5);
  });
});
