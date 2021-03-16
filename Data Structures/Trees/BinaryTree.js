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
        this._printDecreasing(this.root);
    }

    _printDecreasing(node) {
        if(node === null) {
            return;
        }

        this._printDecreasing(node.left);
        console.log(node.data);
        this._printDecreasing(node.right);
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

    getHeight() {
        if(this.root === null) {
            return 0;
        }

        console.log(this._getHeight(this.root));
    }

    _getHeight(node) {
        if(node === null) {
            return 0;
        }

        let left = this._getHeight(node.left);
        let right = this._getHeight(node.right);

        if(left > right) {
            return left + 1;
        }

        return right + 1;
    }

    preOrderTraversal() {
        if(this.root === null) {
            return;
        }

        this._preOrderTraversal(this.root);
    }

    _preOrderTraversal(node) {
        if(node === null) {
            return;
        }

        console.log(node.data);
        this._preOrderTraversal(node.left);
        this._preOrderTraversal(node.right);
    }

    postOrderTraversal() {
        if(this.root === null) {
            return;
        }

        this._postOrderTraversal(this.root);
    }

    _postOrderTraversal(node) {
        if(node === null) {
            return;
        }

        this._postOrderTraversal(node.left);
        this._postOrderTraversal(node.right);
        console.log(node.data);
    }
}

module.exports = BinaryTree;