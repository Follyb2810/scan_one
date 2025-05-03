export class myArray<T> {
    length: number;
    data: Record<number, T>;
    groceries: Array<T>;

    constructor() {
        this.length = 0;
        this.data = {};
        this.groceries = [];
    }

    push(value: T) {
        return this.groceries.push(value);
    }

    createObj(value: T) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    getIndex(value: number) {
        return this.data[value];
    }

    pop() {
        const lastItem = this.groceries.pop();
        
        if (lastItem !== undefined) {
            this.length--;
            delete this.data[this.length];
        }

        return lastItem; 
    }
    
    popObj() {
        if (this.length > 0) {
            const lastIndex = this.length - 1;
            const lastItem = this.data[lastIndex];
            delete this.data[lastIndex];
            this.length--;
            return lastItem; 
        }
        return undefined; 
    }

    shiftObj() {
        if (this.length > 0) {
            const firstItem = this.data[0];

            for (let i = 1; i < this.length; i++) {
                this.data[i - 1] = this.data[i];
            }
            delete this.data[this.length - 1];
            this.length--;

            return firstItem;
        }

        return undefined; 
    }

    deleteObj(value: number) {
        if (value < this.length) {
            const findItem = this.data[value];
            if (findItem) {
                for (let i = value; i < this.length - 1; i++) {
                    this.data[i] = this.data[i + 1];
                }
                delete this.data[this.length - 1]; 
                this.length--; 
            }

            return findItem; 
        }
        return undefined;
    }
}

const newArray = new myArray<number>();
newArray.groceries.push(1);  
// newArray.createObj(0);
// newArray.createObj(1);
// newArray.createObj(2);
// newArray.createObj(3);
// newArray.createObj(4);
// newArray.createObj(5);

// console.log(newArray.data);  
// console.log(newArray.deleteObj(2)); 
// console.log(newArray.data);  

// const newStringArray = new myArray<string>();
// newStringArray.createObj('A');
// newStringArray.createObj('B');
// newStringArray.createObj('C');
// newStringArray.createObj('D');
// newStringArray.createObj('E');
// newStringArray.createObj('F');

// console.log(newStringArray.data);  
// console.log(newStringArray.getIndex(2)); 
// console.log(newStringArray.deleteObj(2)); 
// console.log(newStringArray.data);


export function reverseA(value:string){
    return value.split('').reverse().join()
}
export function reverseB(value:string){
    let newReverse =''
for(let i = 0;i < value.length;i++){
    console.log(value[i])
      newReverse = value[i] + newReverse
}
return newReverse
}
// console.log(reverseB('follyb'))

export function pallendromeA(value:string){
    let pallenA = '';
    for(let i = 0;i<value.length;i++){
        pallenA = value[i] + pallenA
    }
    return pallenA === value
}
export function pallendromeB(value:string){
    const pallenA = value.split('').reverse().join('')
    return pallenA === value
}

// console.log(pallendromeA('madam'))
// console.log(pallendromeB('madam'))

export function reverseInter(value:number){
    let pallentInt =''
    const newInt = value.toString()
    for(const int of newInt){
        pallentInt = int + pallentInt
    }
    return parseInt(pallentInt) * Math.sign(value)
}
// reverseInter(-1234567890)
export function Capitalization(value:string){
    const newWord = value.toLowerCase().split(' ')
    console.log(newWord)
    const ne :Array<string>=[]
    for(let i = 0;i < newWord.length;i++){
        const capt = newWord[i][0].toUpperCase() + newWord[i].slice(1)
        console.log({capt})
        ne.push(capt)
    }
    return ne.join(' ')
}

// console.log(Capitalization('FOLLY IS THE MAN'))
export function CapitalizationOne(value:string){
    return value.toLowerCase().split(' ').map((a)=> a[0].toUpperCase() + a.slice(1)).join(' ')
}
// console.log(CapitalizationOne('FOLLY IS THE MAN'))

export function fixBux(value:number){
    
    for(let i = 0;i < value;i++){
        
        if(i % 3 === 0){
            console.log('fux'+ value)
        }else if(i % 5 === 0){
            console.log('buzz' + value)
        }else if(i % 3 == 0 && i % 5 == 0){
            console.log('fuxbuxx' + value)
        }else{
            console.log(i)
        }
    }
}
// console.log(fixBux(3))

// const price =[7,1,5,3,6,4]
// export function maxProfit(price:Array<number>){
//     let minPrice = 0
//     for(let i =0;i < price.length;i++){
//         if(minPrice > price[i]){
//             minPrice = price[i]
//         }
//         // minPrice = price[i]
//     }
//     return minPrice
    
// }

// console.log(maxProfit(price))
//?
// const price = [7, 1, 5, 3, 6, 4];

// export function maxProfitPrice(price: Array<number>) {
//     let max = 0;
//     for (let i = 0; i < price.length; i++) {
//         if (price[i] < max) {
//             max = price[i];
//         }
//     }
//     return max;
// }

// console.log(maxProfitPrice(price)); 

// const price = [7, 1, 5, 3, 6, 4];

// export function getLowest(price: Array<number>) {
//     let min = Infinity;
//     for (let i = 0; i < price.length; i++) {
//         if (price[i] < min) {
//             min = price[i];
//         }
//     }
//     return min;
// }

// console.log(getLowest(price)); // Output: 1



// const price = [7, 1, 5, 3, 6, 4];

// export function maxProfit(price: Array<number>) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let i = 0; i < price.length; i++) {
//         if (price[i] < minPrice) {
//             minPrice = price[i];
//         } else {
//             const profit = price[i] - minPrice;
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }

//     return maxProfit;
// }

// console.log(maxProfit(price)); // Output: 5

// const price = [7, 1, 5, 3, 6, 4];
// export function maxProfit(price:Array<number>){
//     let maxProfit =0
//     let minPrice= price[0]
//     for(let i =1;i< price.length;i++){
//         const currentPrice = price[i]
//         minPrice = Math.min(minPrice,currentPrice)
//         const potentialProfit = currentPrice - minPrice
//          maxProfit  = Math.max(maxProfit,potentialProfit)
//     }
//     return maxProfit
// }

// console.log(maxProfit(price))

export const price = [7, 1, 5, 3, 6, 4];

export function maxProfit(price: Array<number>) {
    let maxProfit = 0;
    let minPrice = price[0]; // Start with the first price as the minimum

    for (let i = 1; i < price.length; i++) {
        const currentPrice = price[i];

        // Update the lowest price so far
        minPrice = Math.min(minPrice, currentPrice);

        // Calculate potential profit from current price
        const potentialProfit = currentPrice - minPrice;

        // Update maxProfit if this one is better
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}

// console.log(maxProfit(price)); // Output: 5

export function chunkArray<T>(data: Array<T>, size: number): T[][] {
    const newArray: T[][] = [];  
    let index = 0;
    while (index < data.length) {
        const sliceNew = data.slice(index, size + index);
        newArray.push(sliceNew);
        index += size;
    }
    return newArray;  
}

// const price = [7, 1, 5, 3, 6, 4];
// console.log(chunkArray(price, 2));


// export function TwoSum(value:Array<number>,target:number){
//  for(let i = 0;i < value.length;i++){
//     for(let j =0;j < value.length;j++){
//         if(value[i] * value[j] === target){
//             console.log(`we ware 9`)
//         }
//     }
//  }
// }

// const num = [2,7,11,15]
// console.log(TwoSum(num,9))

export function TwoSum(value: Array<number>, target: number): void | Array<number> {
    for (let i = 0; i < value.length; i++) {
      for (let j = i + 1; j < value.length; j++) { 
        if (value[i] + value[j] === target) { 
          console.log(`Indices ${i} and ${j} add up to the target ${target}`);
          return [i, j]; 
        }
      }
    }
    return []
  }
  
  const num = [2, 7, 11, 15];
  console.log(TwoSum(num, 9));
  
