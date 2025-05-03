export class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class DoubleLinkList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;

    constructor(value: T) {
        const newNode = new Node<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value: T): this {
        const newNode = new Node<T>(value);

        if (!this.head) {
            console.log(this.head,'the head of push')
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(this.tail){
                
                // console.log(this.head, 'the head of new push');
                // console.log(this.tail, 'the tail of new push');
                
                // console.log(this.tail.next, 'before this.tail.next of new push');
                this.tail.next = newNode;
                // console.log(this.tail.next, 'after this.tail.next of new push');
                
                // console.log(newNode.prev, 'before newNode.prev of new push');
                newNode.prev = this.tail;
                // console.log(newNode.prev, 'after newNode.prev of new push');
                
                // console.log(this.tail, 'before this.tail of new push');
                this.tail = newNode;
                // console.log(this.tail, 'after this.tail of new push');
            }
        }

        this.length++;
        return this;
    }

    pop(): Node<T> | undefined {
        if (!this.tail) return undefined;

        const temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value: T): this {
        const newNode = new Node<T>(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift(): Node<T> | undefined {
        if (this.length === 0 || !this.head) return undefined;

        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            temp.next = null;
        }

        this.length--;
        return temp;
    }
}
const list = new DoubleLinkList<number>(10);
console.log("Initial:", list);

list.push(20);
console.log("After push: 20", list);
list.push(30);
console.log("After push: 30", list);
list.push(40);
console.log("After push: 40", list);

const popped = list.pop();
console.log("Popped:", popped);

list.unshift(0);
console.log("After unshift:", list);

const shifted = list.shift();
console.log("Shifted:", shifted);
console.log("After all function", list);
