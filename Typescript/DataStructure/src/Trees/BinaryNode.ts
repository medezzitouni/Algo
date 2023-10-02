export type BinaryNode<T> = {
    val: T;
    left: BinaryNode<T>;
    right: BinaryNode<T>
} | null

export function createBinaryNode<T>(val: T) {
    return {
        val,
        left: null,
        right: null
    }
}