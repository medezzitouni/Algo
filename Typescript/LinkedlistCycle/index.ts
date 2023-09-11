// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
  ofArray(arr: number[], pos?: number) {
    let cur: ListNode | null = this;
    let cyclePos: ListNode | null = null;
    cur.val = arr[0];

    if (pos !== null && pos !== undefined && pos === 0) {
      cyclePos = cur;
    }

    for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i]);
      if (pos && pos == i) {
        cyclePos = cur;
      }

      cur = cur.next;
    }

    if (pos !== null && pos !== undefined) {
      cur.next = cyclePos;
    }

    return this;
  }

  log() {
    let cur: ListNode | null = this;
    let arr: number[] = [];
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr);
  }
}

export function hasCycle(head: ListNode | null): boolean {
  const refs = new Set();
  let c = head;
  while (c) {
    if (refs.has(c)) return true;
    else refs.add(c);
    c = c.next;
  }
  return false;
}
