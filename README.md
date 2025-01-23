# Odin - Binary Search Tree in JS

- A Binary Search Tree (BST) implementation in JS
- It includes classes `Node` in `node.js` & `Tree` in `binarySearchTree.js`
- A `Node` has a `value`, `leftChild` and `rightChild`
- A `Tree` has private properties: `array` and `root`
- The binary tree functions:
- [x] `buildTree(array)` -> takes a sorted array without duplicates and returns the root node of the BST
- [x] `prettyPrint(root)` -> takes the root of the tree and prints a formated tree in the console
- [x] `insert(value)` -> inserts the given value in the BST
- [x] `deleteItem(value)` -> deletes the given value from the BST and reorganizes the tree structure
- [x] `find(value)` -> returns the `Node` with the given value
- [x] `levelOrder(callback)` -> breadth-first BST travesal using Iteration
