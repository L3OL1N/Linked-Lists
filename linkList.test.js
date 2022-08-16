const linkList = require("./linkList");
describe("#insertAtHead",()=>{
    test("add data in head",()=>{
        const ll = new linkList();
        ll.insertAtHead(10);
        const old = ll.head;
        ll.insertAtHead(20);

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(old)
        expect(ll.length).toBe(2)
    })
})
describe("#getByIndex",()=>{
    test("index less than 0 return null",()=>{
        const ll = linkList.fromVlaue(10,20)

        expect(ll.getByIndex(-1)).toBeNull()
    })
    test("index greater than length return null",()=>{
        const ll = linkList.fromVlaue(10,20)

        expect(ll.getByIndex(5)).toBeNull()
    })
    test("index head",()=>{
        const ll = linkList.fromVlaue(10,20)

        expect(ll.getByIndex(0).value).toBe(10)
    })
    test("index tail",()=>{
        const ll = linkList.fromVlaue(10,20)

        expect(ll.getByIndex(1).value).toBe(20)
    })
    test("index mid",()=>{
        const ll = linkList.fromVlaue(10,20,30,40,50)

        expect(ll.getByIndex(2).value).toBe(30)
    })
})
describe("#insertByIndex",()=>{
    test("index less than 0",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.insertByIndex(-1,10);

        expect(ll.length).toBe(2)
    })
    test("index greater than length",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.insertByIndex(5,10);

        expect(ll.length).toBe(2)
    })
    test("index 0",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.insertByIndex(0,5);

        expect(ll.head.value).toBe(5)
        expect(ll.length).toBe(3)
    })
    test("index mid",()=>{
        const ll = linkList.fromVlaue(10,20,30)
        ll.insertByIndex(2,50);
        
        expect(ll.getByIndex(2).value).toBe(50)
        expect(ll.length).toBe(4)
    })
})
describe("#removeByIndex",()=>{
    test("index less than 0",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.removeByIndex(-1,10);

        expect(ll.length).toBe(2)
    })
    test("index greater than length",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.removeByIndex(5,10);

        expect(ll.length).toBe(2)
    })
    test("index 0",()=>{
        const ll = linkList.fromVlaue(10,20)
        ll.removeByIndex(0);

        expect(ll.head).toBe(20)
        expect(ll.length).toBe(1)
    })
    test("index mid",()=>{
        const ll = linkList.fromVlaue(10,20,30,40)
        ll.removeByIndex(1);
        
        expect(ll.getByIndex(1).value).toBe(30)
        expect(ll.length).toBe(3)
    })
})