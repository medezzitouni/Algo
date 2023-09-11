import { expect } from "chai";
import { convert } from ".";
import { convert as zigzag } from "./rewrite";

describe("Zigzag", () => {
  it("should zigzag", () => {
    expect(convert("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR");
  });

  it("rewrite algo: should zigzag", () => {
    expect(zigzag("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR");
  });
});
