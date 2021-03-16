const BinaryTree = require('./BinaryTree');

let tree = new BinaryTree();

tree.insert(5);
tree.insert(10);
tree.insert(22);
tree.insert(4);
tree.insert(8);
tree.insert(-6);
tree.insert(-4);
tree.insert(1);
tree.insert(3);
tree.insert(99);

// console.log("printing increasing ---------------------")
// tree.printIncreasing();

// console.log("printing decreasing ---------------------")
// tree.printDecreasing();

console.log("get tree height ---------------------")
tree.getHeight();