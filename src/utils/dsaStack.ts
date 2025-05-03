export class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class Stack<T> {
  first: Node<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node<T>(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value: T): this {
    const newNode = new Node<T>(value);

    if (this.length === 0) {
      this.first = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;

    this.length++;
    return this;
  }

  pop(): Node<T> | undefined {
    if (!this.first) return undefined;

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;

    this.length--;
    return temp;
  }

  peek(): T | undefined {
    return this.first?.value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
  min(){
    if(this.length === 0) return undefined
    let current = this.first
    let minValue = current?.value
    
    while(current?.next){
        
      current =  current.next
        if(current.value < minValue!){
            console.log(`${minValue}:${current.value}`)
            minValue = current.value
        }
    }
    return minValue
  }
}

const stack = new Stack<number>(1);

stack.push(1);
console.log(stack, "after push 1");

stack.push(2);
console.log(stack, "after push 2");

stack.push(3);
console.log(stack, "after push 3");

stack.push(4);
console.log(stack, "after push 4");

console.log(stack.pop(), "popped item");
console.log(stack, "after pop");
console.log(stack.min(), "min valie");
console.log(stack,'this is the stack');
