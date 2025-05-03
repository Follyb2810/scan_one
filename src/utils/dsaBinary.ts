export class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class Binary<T extends number> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T): this | undefined {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    include(value:T){
        if(!this.root) return false
        let temp = this.root
        while(temp){
            if(value < temp.value){
                if(temp.left){
                    
                    temp = temp.left
                }
            }else if( value > temp.value){
                if(temp.right){
                    
                    temp = temp.right
                }
            }else if(value === temp.value){
                return true
            }
        }
        return false
    }
}

const tree = new Binary<number>();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

console.log(JSON.stringify(tree, null, 2));
console.log(tree.include(5))
