import { Tree } from "./binarySearchTree.js";

// Used for testing binary search tree implementation functionality as described in README.md

// Generates an array of `length` random integers, each between 0 and 99 (inclusive)
function generateRandomNumbers(length) {
    let generatedNumbers = [];
    for (let i = 0; i < length; i++) {
        generatedNumbers.push(Math.round(Math.random() * 99));
    }

    return generatedNumbers;
}

let binarySearchTree = new Tree(generateRandomNumbers(30));
binarySearchTree.prettyPrint();
console.log("Is the tree balanced? ", binarySearchTree.isBalanced());

console.log("\nAll elements printed in Level Order: ");
binarySearchTree.levelOrder(simplePrintCallback);

console.log("\n\nAll elements printed in In Order: ");
binarySearchTree.inOrder(simplePrintCallback);

console.log("\n\nAll elements printed in Pre Order: ");
binarySearchTree.preOrder(simplePrintCallback);

console.log("\n\nAll elements printed in Post Order: ");
binarySearchTree.postOrder(simplePrintCallback);

console.log("\n\nUnbalancing the tree...\n");
binarySearchTree.insert(111);
binarySearchTree.insert(112);
binarySearchTree.insert(113);
binarySearchTree.insert(114);
binarySearchTree.prettyPrint();
console.log("Is the tree balanced? ", binarySearchTree.isBalanced());

console.log("\nRebalancing the tree...\n");
binarySearchTree.rebalance();
binarySearchTree.prettyPrint();
console.log("Is the tree balanced? ", binarySearchTree.isBalanced());

console.log("\nAll elements printed in Level Order: ");
binarySearchTree.levelOrder(simplePrintCallback);

console.log("\n\nAll elements printed in In Order: ");
binarySearchTree.inOrder(simplePrintCallback);

console.log("\n\nAll elements printed in Pre Order: ");
binarySearchTree.preOrder(simplePrintCallback);

console.log("\n\nAll elements printed in Post Order: ");
binarySearchTree.postOrder(simplePrintCallback);

function simplePrintCallback(node) {
    process.stdout.write(node.value + " ");
}

 */