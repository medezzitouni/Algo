

import { BinaryNode } from "../BinaryNode";

export function compareTrees<T>(t1: BinaryNode<T>, t2: BinaryNode<T>): boolean {
    if (!t1 && !t2)
        return true;

    if (!t1 || !t2)
        return false;

    if (t1?.val !== t2?.val)
        return false;

    return compareTrees(t1!.left, t2!.left) && compareTrees(t1!.right, t2!.right);
}
