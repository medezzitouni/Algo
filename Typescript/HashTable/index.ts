export class HashTable {
  private _table: any[];
  private _size: number = 0;
  private _capacity: number;

  constructor(capacity: number = 0) {
    this._capacity = capacity;
    this._table = capacity ? new Array(capacity) : new Array();
  }

  public get size() {
    return this._size;
  }

  public get table() {
    return this._table;
  }

  public set(key: any, val: any) {
    let index = this.hash(key);

    if (this._table[index] && this._table[index].length) {
      for (let i = 0; i < this._table[index].length; i++)
        if (this._table[index][i][0] === key) {
          this._table[index][i][1] = val;
          return;
        }
      this._table[index].push([key, val]);
    } else {
      this._table[index] = [[key, val]];
    }

    this._size++;
  }

  public get(key: any) {
    let index = this.hash(key);
    if (this._table[index])
      for (let i = 0; i < this._table[index].length; i++)
        if (this._table[index][i][0] === key) return this._table[index][i];

    return undefined;
  }

  private hash(str: any) {
    str = String(str);
    let index = 0;
    for (let i = 0; i < str.length; i++) index += str.charCodeAt(i); //* (i + 1);
    return this._capacity ? index % this._capacity : index;
  }
  // @override
  toString() {
    const t = [];

    for (let i of this._table) {
      if (i && i.length) {
        for (let j of i) t.push(j);
      }
    }

    return t;
  }
}
