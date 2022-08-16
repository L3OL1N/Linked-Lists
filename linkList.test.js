const linkList = require("./linkList");
describe("#inserAHead",()=>{
    test("add data in head",()=>{
        const ll = new linkList();
        ll.insertAHead(10);
        const old = ll.head;
        ll.insertAHead(20);

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