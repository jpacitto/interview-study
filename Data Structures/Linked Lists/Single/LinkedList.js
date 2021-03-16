const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);

        console.log("value inserted in list:", value);

        if(this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    clearList() {
        this.head = null;
    }

    printList() {
        let current = this.head;

        if(this.head === null) {
            console.log("empty list");
        }

        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    reverse() {
        if(this.head === null) {
            return;
        }

        let current = this.next;
        let next = null;
        let prev = null;

        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

module.exports = LinkedList;