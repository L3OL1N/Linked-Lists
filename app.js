const linkList = require("./linkList");

const ll = linkList.fromVlaue(10,20,30);


ll.removeTail();
console.log(ll.getByIndex(ll.length-1));
console.log(ll.tail.value);
console.log(ll.length);
ll.print();