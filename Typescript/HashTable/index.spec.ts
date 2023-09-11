import { expect } from "chai";
import { HashTable } from ".";

function hashHelper(str: string, capacity: number) {
  let index = 0;
  for (let i = 0; i < str.length; i++) index += str.charCodeAt(i); //  * (i + 1);
  return capacity ? index % capacity : index;
}

describe("HashTable", () => {
  const capacity = 120;
  const h = new HashTable(capacity);

  let [key1, val1] = ["ab", 1],
    [key2, val2] = ["ba", 2],
    [key3, val3] = ["safe", 87],
    [key4, val4] = ["ǻ", 44],
    [key5, val5] = ["Spain", 44];

  before(() => {
    h.set(key1, val1);
    h.set(key2, val2);
    h.set(key3, val3);
    h.set(key4, val4);
    h.set(key5, val5);
    console.log("====================================");
    console.log(h.table);
    console.log("====================================");
  });

  it("store item at the right index", () => {
    expect(h.table[hashHelper(key1, capacity)][0]).to.eql([key1, val1]);
    expect(h.table[hashHelper(key2, capacity)][1]).to.eql([key2, val2]);

    expect(h.table[hashHelper(key3, capacity)][0]).to.eql([key3, val3]);

    expect(h.table[hashHelper(key4, capacity)][0]).to.eql([key4, val4]);
    expect(h.table[hashHelper(key5, capacity)][1]).to.eql([key5, val5]);
  });

  it("get the right item", () => {
    expect(h.get(key1)).to.be.eql([key1, val1]);

    expect(h.get("notFound")).to.be.eql(undefined);
  });
});
