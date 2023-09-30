import { Node } from "../../LinkedList";
import Queue from '../../Queue';
import { BinaryNode } from "../BinaryNode";

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
