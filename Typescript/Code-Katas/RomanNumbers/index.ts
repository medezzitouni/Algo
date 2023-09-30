export function intToRoman(num: number): string {
  if (String(num) === "NaN" || num === 0 || num >= 4000) return "";
  let str = "";
  let count = 0;
  let romans: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let i in romans) {
    if (num >= romans[i]) {
      count = num / romans[i];
      str += i.repeat(count);
      num = num % romans[i];
    }
  }

  return str;
}

export function intToRoman_worse(num: number): string {
  const stringify = String(num),
    len = stringify.length - 1;
  let str = "";

  if (stringify.length == 0 || num == 0 || num >= 4000 || stringify === "NaN")
    return "";

  const romans = new Map([
    ["1", ["I", "X", "C", "M"]],
    ["2", ["II", "XX", "CC", "MM"]],
    ["3", ["III", "XXX", "CCC", "MMM"]],
    ["4", ["IV", "XL", "CD"]],
    ["5", ["V", "L", "D"]],
    ["6", ["VI", "LX", "DC"]],
    ["7", ["VII", "LXX", "DCC"]],
    ["8", ["VIII", "LXXX", "DCCC"]],
    ["9", ["IX", "XC", "CM"]],
  ]);

  for (let i = 0; i <= len; i++) {
    str += stringify[i] !== "0" ? romans.get(stringify[i])![len - i] : "";
  }

  return str;
}
