import { Node } from "./node.js";

class Tree {
    #array;
    #root;
    constructor(array) {
        this.#array = [... new Set(array)].sort((a, b) => a - b); // Array is sorted and the duplicates are removed
        this.#root = this.buildTree(this.#array); // The root node returned by buildTree(array)
    }

    // A sorted and duplicate free arrray should be passed in
    buildTree(array) {
        if (array.length === 0) return null;

        const mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);

        root.leftChild = this.buildTree(array.slice(0, mid));
        root.rightChild = this.buildTree(array.slice(mid + 1));

        return root;
    }

    // Prints the binary tree in the console
    prettyPrint(node = this.#root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }

        if (node.rightChild !== null) {
            this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }

        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

        if (node.left !== null) {
            this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    // Inserts the given value using iteration over the binary tree
    insert(value) {

        if (this.#root === null) {
            return new Node(value);
        }

        let currentNode = this.#root;

        while (true) {
            if (value <= currentNode.value) {
                if (currentNode.leftChild === null) {
                    currentNode.leftChild = new Node(value);
                    return;
                }
                else {
                    currentNode = currentNode.leftChild;
                }
            }
            else {
                if (currentNode.rightChild === null) {
                    currentNode.rightChild = new Node(value);
                    return;
                }
                else {
                    currentNode = currentNode.rightChild;
                }
            }
        }
        
    }

    
}

export { Tree };