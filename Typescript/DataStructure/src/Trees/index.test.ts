import { compareTrees } from '../Trees/compareTrees';
import { BinaryNode } from "./BinaryNode";
import { breadthTraversal } from './breadthTraversal/breadthTraversal';
import { inOrderTraversal, postOrderTraversal, preOrderTraversal } from "./depthTraversal/depthTraversal";
import { inOrderTraversalWithStack, preOrderTraversalWithStack } from "./depthTraversal/depthTraversalWithStack";
describe("Trees", () => {
    let root: BinaryNode<number>;
    let root2: BinaryNode<number>;

    beforeEach(() => {
        root = {
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
        root2 = {
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
    })
    test("preOrderTraversal", () => {
        const path: number[] = [2, 3, 6, 5, 7]
        expect(preOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("preOrderTraversalWithStack", () => {
        const path: number[] = [2, 3, 6, 5, 7]
        expect(preOrderTraversalWithStack<number>(root, [])).toEqual(path);
    });

    test("inOrderTraversal", () => {
        const path: number[] = [3, 2, 5, 6, 7]
        expect(inOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("inOrderTraversalWithStack", () => {
        const path: number[] = [3, 2, 5, 6, 7]
        expect(inOrderTraversalWithStack<number>(root, [])).toEqual(path);
    });

    test("postOrderTraversal", () => {
        const path: number[] = [3, 5, 7, 6, 2]
        expect(postOrderTraversal<number>(root, [])).toEqual(path);
    });

    test("breadthTraversal", () => {
        const path: number[] = [2, 3, 6, 5, 7]
        expect(breadthTraversal<number>(root, [])).toEqual(path);
    });

    test("compareTrees", () => {
        expect(compareTrees<number>(root, root2)).toEqual(true);
        root2!.right!.left = null;
        expect(compareTrees<number>(root, root2)).toEqual(false);
    });

    test("compareTrees - vals are different", () => {
        root2!.right!.left!.val = 10;

        expect(compareTrees<number>(root, root2)).toEqual(false);
    });
});
