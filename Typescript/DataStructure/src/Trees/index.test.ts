import { breadthTraversal } from './breadthTraversal';
import { BinaryNode, inOrderTraversal, postOrderTraversal, preOrderTraversal } from "./depthTraversal";

describe("Trees", () => {
    let root: BinaryNode<number> = {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            },
        },
    };

    test("preOrderTraversal", () => {
        const path: number[] = [2, 3, 6, 5, 7]
        expect(preOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("inOrderTraversal", () => {
        const path: number[] = [3, 2, 5, 6, 7]
        expect(inOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("postOrderTraversal", () => {
        const path: number[] = [3, 5, 7, 6, 2]
        expect(postOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("breadthTraversal", () => {
        const path: number[] = [2, 3, 6, 5, 7]
        expect(breadthTraversal<number>(root, [])).toEqual(path);
    });
});
