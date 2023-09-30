import { expect } from "chai";
import { intToRoman } from ".";

describe("Roman Number", () => {
  it("should be correct roman number", () => {
    expect(intToRoman(3)).to.be.equal("III");
    expect(intToRoman(58)).to.be.equal("LVIII");
    expect(intToRoman(1994)).to.be.equal("MCMXCIV");

    expect(intToRoman(0)).to.be.equal("");
    expect(intToRoman(4000)).to.be.equal("");
    expect(intToRoman(NaN)).to.be.equal("");
    expect(intToRoman(10)).to.be.equal("X");
    expect(intToRoman(909)).to.be.equal("CMIX");
  });
});
