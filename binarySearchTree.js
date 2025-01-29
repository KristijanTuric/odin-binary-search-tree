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
            if (value === currentNode.value) return;
            if (value < currentNode.value) {
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

    // Deletes the given value from the BST using Iteration and reorganizes the BST
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

    // Breadth-first BST travesal using Iteration
    levelOrder(callback) {

        if (typeof(callback) !== 'function') {
            throw Error("A callback function is required");
        }

        if (this.#root === null) {
            throw Error("The Tree is empty!");
        }

        let currentNode = null;
        let queue = [];

        queue.push(this.#root);

        while (queue.length != 0) {
            currentNode = queue.shift();

            callback(currentNode);

            if (currentNode.leftChild != null) {
                queue.push(currentNode.leftChild);
            }

            if (currentNode.rightChild != null) {
                queue.push(currentNode.rightChild);
            }
        }
    }

    // BST depth-first search travesal in order left subtree -> root -> right subtree
    inOrder(callback) {
        if (typeof(callback) != 'function') {
            throw new Error("A callback function is required!");
        }

        let currentNode = this.#root;
        
        function traverse(node) {
            if (node != null) {
                traverse(node.leftChild);
                callback(node);
                traverse(node.rightChild);
            }
        }

        traverse(currentNode);
    }

    // BST depth-first search travesal in order root -> left subtree -> right subtree
    preOrder(callback) {
        if (typeof(callback) != 'function') {
            throw new Error("A callback function is required!");
        }

        let currentNode = this.#root;
        
        function traverse(node) {
            if (node != null) {
                callback(node);
                traverse(node.leftChild);
                traverse(node.rightChild);
            }
        }

        traverse(currentNode);
    }

    // BST depth-first search travesal in order left subtree -> right subtree -> root
    postOrder(callback) {
        if (typeof(callback) != 'function') {
            throw new Error("A callback function is required!");
        }

        let currentNode = this.#root;
        
        function traverse(node) {
            if (node != null) {
                traverse(node.leftChild);
                traverse(node.rightChild);
                callback(node);
            }
        }

        traverse(currentNode);
    }

    // Returns the number of edges in the longest path from a given node to a leaf node
    height(node) {
        if (!node) return -1;
        if (node.leftChild == null && node.rightChild === null) return 0;
        
        let leftHeight = this.height(node.leftChild);
        let rightHeight = this.height(node.rightChild);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Returns the number of edges in the path from a given node to the tree's root node
    depth(node) {
        if (node === null) return -1;
        let depth = 0;
        let currentNode = this.#root;

        while (currentNode !== node) {
            // Search on the left side
            if (node.value < currentNode.value) {
                currentNode = currentNode.leftChild;
                depth += 1;
            }
            // Search on the right side
            else {
                currentNode = currentNode.rightChild;
                depth += 1;
            }
        }
        return depth;
    }

    // returns true if the tree is balanced
    isBalanced() {
        let isBalanced = true;

        this.levelOrder((node) => {
            let leftHeight = this.height(node.leftChild);
            let rightHeight = this.height(node.rightChild);

            if (Math.abs(leftHeight - rightHeight) > 1) {
                isBalanced = false;
                return;
            }
        });

        return isBalanced;
    }

    // Rebalances an unbalanced tree
    rebalance() {
        if (this.isBalanced()) return;

        let sortedNodeValues = [];
        this.inOrder((node) => {
            sortedNodeValues.push(node.value);
        });

        this.#root = this.buildTree(sortedNodeValues);
    }
}

export { Tree };