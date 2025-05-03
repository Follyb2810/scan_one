
export class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class Queue<T> {
    first: Node<T> | null;
    last: Node<T> | null;
    length: number;

    constructor(value: T) {
        const newNode = new Node<T>(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value: T): this {
        const newNode = new Node<T>(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next = newNode;
                this.last = newNode;
            }
        }

        this.length++;
        return this;
    }

    dequeue(): Node<T> | undefined {
        if (!this.first) return undefined;

        const temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null
        }else{
            this.first = this.first.next;
            temp.next = null;
        }
        // if (this.first === this.last) {
        //     this.last = null;
        // }
        // if(temp){
            
        //     this.first = this.first.next;
        //     temp.next = null;
        // }

        this.length--;
        return temp;
    }
}

const queue = new Queue(0);

queue.enqueue(1);
console.log(queue, "after enqueue 1");

queue.enqueue(2);
console.log(queue, "after enqueue 2");

console.log(queue.dequeue(), "after dequeue");
console.log(queue, "queue after dequeue");
