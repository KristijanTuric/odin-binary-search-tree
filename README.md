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
- [x] `inOrder(callback)` -> BST depth-first search travesal in order left subtree -> root -> right subtree
- [x] `preOrder(callback)` -> BST depth-first search travesal in order root -> left subtree -> right subtree
- [x] `postOrder(callback)` -> BST depth-first search travesal in order left subtree -> right subtree -> root
- [x] `height(node)` -> returns the number of edges in the longest path from a given node to a leaf node
- [x] `depth(node)` -> returns the number of edges in the path from a given node to the tree's root node
- [x] `isBalanced()` -> checks if the tree is balanced, a balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1
- [x] `rebalance()` -> rebalances an unbalanced tree

## Testing is done in `main.js` with the following method

1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
2. Confirm that the tree is balanced by calling isBalanced.
3. Print out all elements in level, pre, post, and in order.
4. Unbalance the tree by adding several numbers > 100.
5. Confirm that the tree is unbalanced by calling isBalanced.
6. Balance the tree by calling rebalance.
7. Confirm that the tree is balanced by calling isBalanced.
8. Print out all elements in level, pre, post, and in order.
