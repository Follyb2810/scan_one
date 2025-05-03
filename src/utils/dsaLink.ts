export class NodeOne<T> {
    public readonly value: T;         
    public prev: Node<T> | null;
    public next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export class DoubleLinkOne<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;
    protected readonly createdAt: Date;   

    constructor(value: T) {
        const newNode = new Node<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
        this.createdAt = new Date(); 
    }

    public push(value: T): void {
        const newNode = new Node<T>(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    public getLength(): number {
        return this.length;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }
}


export class Node<T> {
    public value: T;              // accessible anywhere
    public prev: Node<T> | null;  // accessible anywhere
    public next: Node<T> | null;  // accessible anywhere

    constructor(value: T) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export class DoubleLink<T> {
    private head: Node<T> | null;  // accessible only inside DoubleLink
    private tail: Node<T> | null;
    private length: number;
    protected _age: number;        // accessible in this class and subclasses

    constructor(value: T) {
        const newNode = new Node<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
        this._age = 0;
    }

    public push(value: T): void {
        const newNode = new Node<T>(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    public getLength(): number {
        return this.length;
    }
}

export class ExtendedDoubleLink<T> extends DoubleLink<T> {
    constructor(value: T) {
        super(value);
        console.log(this._age); // ✅ okay, because _age is protected
        // console.log(this.head); ❌ Error, because head is private
    }
}
