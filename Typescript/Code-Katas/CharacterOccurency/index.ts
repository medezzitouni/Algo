export function CharOccurency(str: string, c: string) {
  const occ = new Map();

  for (let i of str) {
    occ.set(i, (occ.get(i) || 0) + 1);
  }

  return occ.get(c) || 0;
}
