export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let obj: { [k: string]: number } = {};

  for (let [i, v] of nums.entries()) {
    if (obj[v] !== undefined && Math.abs(obj[v] - i) <= k) return true;
    else obj[v] = i;
  }
  return false;
}
