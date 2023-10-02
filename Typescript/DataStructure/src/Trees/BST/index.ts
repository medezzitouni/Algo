import { BinaryNode, createBinaryNode } from './../BinaryNode';

/** rule of thumb when removing
 * either you look for the bigger element in the small elements sub-tree (in a BTS small elements are always the left)
 * or the smallest in the big elements sub-tree (in a BTS the big elements are always the right)
*/
export function remove<T>(tree: BinaryNode<T>, val: T, parent: BinaryNode<T>): boolean {

    if (!tree) return false;

    if (tree.val === val) {
        if (parent === tree) {
            parent = null
        } else if (!tree.left && !tree.right) {
            if (parent?.left === tree) {
                parent.left = null;
            } else if (parent?.right === tree) {
                parent.right = null;
            }
        } else if (tree.left) {
            let curr: BinaryNode<T> = tree.left, parent: BinaryNode<T> = null;
            if (!curr.right) {
                tree.val = curr.val;
                tree.left = curr.left
            }
            else {
                let parent: BinaryNode<T> = null;
                while (curr?.right) {
                    parent = curr;
                    curr = curr?.right;
                }

                tree.val = curr.val;
                if (parent) parent.right = curr.left
            }

        } else if (tree.right) {
            let curr: BinaryNode<T> = tree.right;
            if (!curr.left) {
                tree.val = curr.val
                tree.right = curr.right;
            } else {
                let parent: BinaryNode<T> = null;
                while (curr.left) {
                    parent = curr;
                    curr = curr.left
                }
                tree.val = curr.val
                if (parent) parent.left = curr.right;
                curr = null
            }

        }
        return true;
    }

    if (val < tree.val)
        return remove(tree.left, val, tree)
    return remove(tree.right, val, tree)
}

export function search<T>(tree: BinaryNode<T>, val: T): false | BinaryNode<T> {

    if (!tree) return false;

    if (tree.val === val)
        return tree;

    if (val < tree.val)
        return search(tree.left, val)
    return search(tree.right, val)
}

export function insert<T>(tree: BinaryNode<T>, val: T): boolean {

    if (!tree) {
        tree = createBinaryNode(val);
        return true;
    }

    if (val <= tree.val) {
        if (!tree.left) {
            tree.left = createBinaryNode(val);
            return true;
        } else {
            return insert(tree.left, val);
        }
    } else {
        if (!tree.right) {
            tree.right = createBinaryNode(val);
            return true;
        } else {
            return insert(tree.right, val);
        }
    }
}