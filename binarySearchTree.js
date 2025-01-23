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

    // Inserts the given value using Iteration over the binary tree
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

    // Deletes the given value from the BTS using Iteration and reorganizes the BTS
    deleteItem(value) {
        let currentNode = this.#root;
        let parentNode = null;

        while (currentNode != null && currentNode.value != value) {
            parentNode = currentNode;
        
            if (value < currentNode.value) {
                currentNode = currentNode.leftChild;
            }
            else {
                currentNode = currentNode.rightChild;
            }
        }

        if (currentNode === null) return null;

        // Case 1: Node is a leaf (no children)
        if (currentNode.leftChild === null && currentNode.rightChild === null) {
            if (currentNode === this.#root) this.#root = null;
            else if (parentNode.leftChild === currentNode) {
                parentNode.leftChild = null;
            }
            else parentNode.rightChild = null;
        }

        // Case 2: Node to delete has only one child
        else if (currentNode.leftChild === null || currentNode.rightChild === null) {
            if (currentNode.leftChild != null) {
                let child = currentNode.leftChild;
            }
            else {
                let child = currentNode.rightChild;
            }

            if (currentNode === this.#root) this.#root = child;
            else if (parentNode.leftChild === currentNode) {
                parentNode.leftChild = child;
            }
            else parentNode.rightChild = child;
        }

        // Case 3: Node to delete has two children
        else {
            // Find the smallest node in the right subtree (in-order successor)
            let successorParent = currentNode;
            let successor = currentNode.rightChild;

            // Find the smallest node (leftmost)
            while (successor.leftChild != null) {
                successorParent = successor;
                successor = successor.leftChild;
            }

            // Replace the current node's value with the successor's value
            currentNode.value = successor.value;

            // Delete the in-order successor
            if (successorParent.leftChild === successor) {
                successorParent.leftChild = successor.rightChild;
            }
            else {
                successorParent.rightChild = successor.rightChild; // In case the successor had a rightChild
            }
        }
 
    }

    // Returns the Node with the given value
    find(value) {
        let currentNode = this.#root;
        
        while (currentNode != null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.leftChild;
            }
            else {
                currentNode = currentNode.rightChild;
            }
        }

        return null;
    }
}

export { Tree };