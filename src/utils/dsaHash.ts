export class HashTable<T> {
    keyMap: Array<[string, T][]>; 

    constructor(size: number = 5) {
        this.keyMap = new Array(size);
        console.log({key:this.keyMap})
    }

    _hashFunction(key: string): number {
        const PRIME_NUMBER = 31;
        let sum = 0;
        for (let i = 0; i < Math.min(key.length, 1000); i++) {
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return sum;
    }

    set(key: string, value: T): void {
        const index = this._hashFunction(key);
        console.log(`Index for ${key}: ${index}`);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get(key: string): T | undefined {
        const index = this._hashFunction(key);
        if (!this.keyMap[index]) {
            return undefined;
        }

        for (const [storedKey, storedValue] of this.keyMap[index]) {
            if (storedKey === key) {
                return storedValue;
            }
        }
        return undefined;
    }
    
    getAllKey(){
        const keys = []
        for(let i =0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j =0;j < this.keyMap[i].length;j++){
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }
    getAllValue(){
        const values =[]
        for(let i =0;i <this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j =0;j < this.keyMap[i].length;j++){
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

const phoneBook = new HashTable<string>();
phoneBook.set('folly', '555-555-555');
phoneBook.set('john', '123-456-789');
phoneBook.set('john', '653-356-199');
console.log(phoneBook)
console.log(phoneBook.get('folly')); 
console.log(phoneBook.get('john')); 
console.log(phoneBook.get('nonexistent')); 
console.log(phoneBook.getAllValue())
console.log(phoneBook.getAllKey())

// [
//     [
//       ["item1", { id: 1, name: "Alpha" }],
//       ["item2", { id: 2, name: "Beta" }]
//     ],
//     [
//       ["item3", { id: 3, name: "Gamma" }]
//     ]
//   ];