const Node = require('./Node');

class BinaryTree
{
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
         if(this.root === null) {
             this.root = newNode;
         }else {
            this._insert(this.root, newNode)
         }
    }

    _insert(node, newNode) {
        if(newNode.data < node.data){
            if(node.right === null) {
                node.right = newNode;
            }else{
                this._insert(node.right, newNode);
            }
        }else if(newNode.data > node.data) {
            if(node.left === null) {
                node.left = newNode;
            }else{
                this._insert(node.left, newNode);
            }
        }
    }

    printIncreasing() {
        this._printIncreasing(this.root);
    }

    _printIncreasing(node) {
        if(node === null) {
            return;
        }

        this._printIncreasing(node.right);
        console.log(node.data);
        this._printIncreasing(node.left);
    }

    printDecreasing() {
        this._printIncreasing(this.root);
    }

    _printDecreasing(node) {
        if(node === null) {
            return;
        }

        this._printDecreasing(node.right);
        console.log(node.data);
        this._printDecreasing(node.left);
    }

    reverseTree() {
        this._reverseTree(this.root);
    }

    _reverseTree(node) {
        if(node === null) {
            return;
        }

        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        this._reverseTree(node.left);
        this._reverseTree(node.right);
    }
}

export default BinaryTree;