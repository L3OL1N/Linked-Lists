class linkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //insert
    insertAtHead(data){
        const newNode = new linkListNode(data,this.head)
        this.head = newNode;
        this.length++;
        this.tail = this.getByIndex(this.length-1);
    }
    insertByIndex(index,value){
        if(index < 0 || index >= this.length) return;
        if(index == 0) return this.insertAtHead(value);
        let preNode = this.getByIndex(index-1);
        preNode.next = new linkListNode(value,preNode.next);
        this.length++;
    }
    insertAtTail(data){
        let preNode = this.getByIndex(this.length-1);
        preNode.next = new linkListNode(data,null);
        this.tail = preNode.next;
        this.length++;
    }
    //remove
    removeHead(){
        this.head = this.head.next;
        this.length--;
    }
    removeByIndex(index){
        if(index < 0 || index >= this.length) return;
        if(index == 0) return this.removeHead();
        let preNode = this.getByIndex(index-1);
        preNode.next = preNode.next.next;
        this.length--;
        this.tail = this.getByIndex(this.length-1);
    }
    removeTail(){
        this.removeByIndex(this.length-1);
    }
    //search
    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    contains(value){
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            if(current.value == value) return true;
            current = current.next;
        }
        return false;
    }
    //print
    print(){
        let output = "";
        let current = this.head;
        while(current){
            output = `${output} (${current.value}) ->`
            current = current.next;
        }
        console.log(`${output} Null`);
    }
}

class linkListNode{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}
linkList.fromVlaue = function(...value){
    const ll = new linkList();
    for(let i = value.length-1;i >= 0; i--){
        ll.insertAtHead(value[i]);
    }
    return ll;
}
module.exports = linkList;