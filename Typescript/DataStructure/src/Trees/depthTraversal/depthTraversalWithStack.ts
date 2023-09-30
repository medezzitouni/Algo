import { Node } from "../../LinkedList";
import Stack from "../../Stack";
import { BinaryNode } from "../BinaryNode";

export function preOrderTraversalWithStack<T>(tree: BinaryNode<T>, path: Array<T>) {

    const stack = new Stack(new Node(tree));

    while (!stack.isEmpty()) {
        const curr = stack.pop();

        if (!curr) continue;

        path.push(curr.val)

        stack.push(curr.right)
        stack.push(curr.left)

    }

    return path;
}

export function inOrderTraversalWithStack<T>(tree: BinaryNode<T>, path: Array<T | null>) {

    const stack: BinaryNode<T>[] = [];
    let curr = tree;


    while (stack.length || curr) {

        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop()!;

        path.push(curr.val)

        curr = curr.right;

    }

    return path;
}
