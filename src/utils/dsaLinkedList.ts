//? Linked List Implementation in TypeScript
//? head point to next node
//? tail pint to new node 
//? neext point to next node
export class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;

    constructor(value: T) {
        const newNode = new Node<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1; 
    }

    append(value: T): void {
        const newNode = new Node<T>(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    push(value: T): void {
        
        const newNode = new Node<T>(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pushV(value: T): void {
        const newNode = new Node<T>(value);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        } else {

            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
    
    popList(): Node<T> | undefined {
        if (!this.head) return undefined;
    
        let temp = this.head;
        let prev = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp;
        }
    
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
    
        this.tail = prev;
        this.tail.next = null;
        this.length--;
    
        return temp; 
    }
    unshift(value:T){
        const newNode = new Node<T>(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        newNode.next = newNode
        this.head = newNode
        this.length++
        console.log({this:this})
        return this
        
    }
    shift(){
       if(!this.head) return undefined
       const temp = this.head 
       this.head = this.head.next
       temp.next =null
       this.length--;
       if(this.length == 0){
        this.tail = null
       }
       
       return temp
    }
    
    getFirst(){
        return this.head
    }
    getLast(){
        if(!this.head) return null
        let temp = this.head
        while(temp){
            if(!temp.next) return temp
            temp = temp.next
        }
    }
    getIndex(value:number){
        let counter =0
        let temp = this.head
        while(temp){
            if(counter === value){
                return temp
            }
            counter++
            temp = temp.next
        }
        return null
    }
    setValue(value:T,index:number){
     const temp =   this.getIndex(index)
     if(temp){
        temp.value = value
        return true
     }
     return false
    }
    insert(value:T,index:number){
        
        const newNode = new Node<T>(value)
        if(this.length === 0) return this.unshift(value)
        if(this.length === index) return this.push(value)
        // const lastNodeIndex = this.getIndex(index)
        const prevNode = this.getIndex(index -1)
        // this.head = newNode
        // this.tail?.next = NodeIndex?.next
        if(prevNode){
            newNode.next = prevNode.next
            prevNode.next = newNode
            this.length++
        }
        return true
    }
    linkLength(){
        return this.length
    }
    size(){
        let counter =0
        let temp = this.head
        while(temp){
            counter++
            temp = temp.next
        }
        return counter
    }
    clear(){
        // while(this.length > 0){
            this.head = null;
            // this.tail = null
        // }
    }
    reverse(){
        let temp= this.head
        this.head = this.tail
        this.tail = temp
        let next = temp
        let prev = null
        for(let i = 0;i < this.length;i++){
            next = temp!.next
            temp!.next = prev
            prev = temp
            temp = next
        }
        
    }
}


const list = new LinkedList<number>(1);
console.log(list,'push one')
list.push(2);
console.log(list,'push two')
list.push(3);
console.log(list,'push three')
list.reverse()
console.log(list,'after all ')
// console.log(list.reverse())
console.log(list,'after all revesre ')
// console.log({list})
// list.unshift(3)
// list.shift()
// console.log({list})
// console.log(list.getFirst(),'first')
// console.log({list})
// console.log(list.getLast(),'last')
// console.log({list})
// console.log(list.getIndex(2),'undec')
// console.log(list.setValue(2,10),'change the value')
// console.log(list.size())
// const newLink = new LinkedList<number>(1)
// console.log(newLink)
// newLink.push(1)
// newLink.push(2)
// newLink.push(2)
// console.log(newLink)
// const list = new LinkedList<number>(5);
// console.log(list)
// list.append(10);
// list.append(15);
// list.push(10);
// list.push(15);
// console.log(list);
// const list = new LinkedList<number>(1);
// list.push(2);
// list.push(3);
// console.log(list.popList()); 
// console.log(list.popList()); 
// console.log(list.popList()); 
// console.log(list.popList()); 

// const undoStack = new LinkedList<string>("Initial");
// const redoStack = new LinkedList<string>("");

// undoStack.push("Typed H");
// undoStack.push("Typed e");
// undoStack.push("Typed l");

// const lastAction = undoStack.popList();
// if (lastAction) redoStack.push(lastAction.value);


