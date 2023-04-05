import { convert } from ".";
import { expect } from "chai";

describe('Zigzag', () => {
    it('should zigzag', () => {
        expect(convert("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR");
    })
})