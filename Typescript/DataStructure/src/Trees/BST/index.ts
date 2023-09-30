import { BinaryNode } from './../BinaryNode';


function remove<T>(tree: BinaryNode<T>, val: T, parent: BinaryNode<T>) {

    if (!tree) return;

    if (tree.val === val) {
        if (tree.left) {
            if (parent!.right === tree) {
                parent!.right = tree.left;
                let curr: BinaryNode<T> = tree.left;
                while (!curr!.right) curr = curr!.right
                curr!.right = tree.right
            } else {
                parent!.left = tree.left;
            }
        } else if (tree.right) {

        } else {
            tree = null
        }
    }
}