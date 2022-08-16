class linkList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insertAtHead(data){
        const newNode = new linkListNode(data,this.head)
        this.head = newNode;
        this.length++;
    }
    removeAtHead(){
        this.head = this.head.next;
        this.length--;
    }
    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    insertByIndex(index,value){
        if(index < 0 || index >= this.length) return;
        if(index == 0) return this.insertAtHead(value);
        let preNode = this.getByIndex(index-1);
        preNode.next = new linkListNode(value,preNode.next);
        this.length++;
    }
    removeByIndex(index){
        if(index < 0 || index >= this.length) return;
        if(index == 0) return this.removeAtHead();
        let preNode = this.getByIndex(index-1);
        preNode.next = preNode.next.next;
        this.length--;
    }
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