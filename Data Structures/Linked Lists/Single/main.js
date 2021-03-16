const LinkedList = require('./LinkedList');


let list = new LinkedList();

list.insert(5);
list.insert(10);
list.insert(15);
list.insert(9);
list.insert(0);
list.insert(56);
list.insert(-1);
list.insert(11);

list.printList();

console.log("reversing list ----------------------------");
list.reverseList();

list.printList();