import { Node } from "../LinkedList";
import Queue from '../Queue';


export type BinaryNode<T> = {
    val: T;
    left: BinaryNode<T>;
    right: BinaryNode<T>
} | null

export function breadthTraversal<T>(tree: BinaryNode<T>, path: Array<T>) {
    const q = new Queue(new Node(tree))

    while (!q.isEmpty()) {
        const curr = q.dequeue();

        if (!curr) continue

        path.push(curr.val)

        q.enqueue(curr.left)
        q.enqueue(curr.right)
    }

    return path;
}
