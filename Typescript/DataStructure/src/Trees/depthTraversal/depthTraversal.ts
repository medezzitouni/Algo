import { BinaryNode } from "../BinaryNode";

export function preOrderTraversal<T>(tree: BinaryNode<T>, path: Array<T>) {

    if (!tree) return path;

    path.push(tree.val)
    preOrderTraversal(tree.left, path)
    preOrderTraversal(tree.right, path)

    return path;
}

export function inOrderTraversal<T>(tree: BinaryNode<T>, path: Array<T>) {

    if (!tree) return path;

    inOrderTraversal(tree.left, path)
    path.push(tree.val)
    inOrderTraversal(tree.right, path)

    return path;
}

export function postOrderTraversal<T>(tree: BinaryNode<T>, path: Array<T>) {

    if (!tree) return path;

    postOrderTraversal(tree.left, path)
    postOrderTraversal(tree.right, path)
    path.push(tree.val)

    return path;
}

