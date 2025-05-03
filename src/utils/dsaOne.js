"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSum = exports.chunkArray = exports.maxProfit = exports.price = exports.fixBux = exports.CapitalizationOne = exports.Capitalization = exports.reverseInter = exports.pallendromeB = exports.pallendromeA = exports.reverseB = exports.reverseA = exports.myArray = void 0;
var myArray = /** @class */ (function () {
    function myArray() {
        this.length = 0;
        this.data = {};
        this.groceries = [];
    }
    myArray.prototype.push = function (value) {
        return this.groceries.push(value);
    };
    myArray.prototype.createObj = function (value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    };
    myArray.prototype.getIndex = function (value) {
        return this.data[value];
    };
    myArray.prototype.pop = function () {
        var lastItem = this.groceries.pop();
        if (lastItem !== undefined) {
            this.length--;
            delete this.data[this.length];
        }
        return lastItem;
    };
    myArray.prototype.popObj = function () {
        if (this.length > 0) {
            var lastIndex = this.length - 1;
            var lastItem = this.data[lastIndex];
            delete this.data[lastIndex];
            this.length--;
            return lastItem;
        }
        return undefined;
    };
    myArray.prototype.shiftObj = function () {
        if (this.length > 0) {
            var firstItem = this.data[0];
            for (var i = 1; i < this.length; i++) {
                this.data[i - 1] = this.data[i];
            }
            delete this.data[this.length - 1];
            this.length--;
            return firstItem;
        }
        return undefined;
    };
    myArray.prototype.deleteObj = function (value) {
        if (value < this.length) {
            var findItem = this.data[value];
            if (findItem) {
                for (var i = value; i < this.length - 1; i++) {
                    this.data[i] = this.data[i + 1];
                }
                delete this.data[this.length - 1];
                this.length--;
            }
            return findItem;
        }
        return undefined;
    };
    return myArray;
}());
exports.myArray = myArray;
var newArray = new myArray();
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
function reverseA(value) {
    return value.split('').reverse().join();
}
exports.reverseA = reverseA;
function reverseB(value) {
    var newReverse = '';
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
        newReverse = value[i] + newReverse;
    }
    return newReverse;
}
exports.reverseB = reverseB;
// console.log(reverseB('follyb'))
function pallendromeA(value) {
    var pallenA = '';
    for (var i = 0; i < value.length; i++) {
        pallenA = value[i] + pallenA;
    }
    return pallenA === value;
}
exports.pallendromeA = pallendromeA;
function pallendromeB(value) {
    var pallenA = value.split('').reverse().join('');
    return pallenA === value;
}
exports.pallendromeB = pallendromeB;
// console.log(pallendromeA('madam'))
// console.log(pallendromeB('madam'))
function reverseInter(value) {
    var pallentInt = '';
    var newInt = value.toString();
    for (var _i = 0, newInt_1 = newInt; _i < newInt_1.length; _i++) {
        var int = newInt_1[_i];
        pallentInt = int + pallentInt;
    }
    return parseInt(pallentInt) * Math.sign(value);
}
exports.reverseInter = reverseInter;
// reverseInter(-1234567890)
function Capitalization(value) {
    var newWord = value.toLowerCase().split(' ');
    console.log(newWord);
    var ne = [];
    for (var i = 0; i < newWord.length; i++) {
        var capt = newWord[i][0].toUpperCase() + newWord[i].slice(1);
        console.log({ capt: capt });
        ne.push(capt);
    }
    return ne.join(' ');
}
exports.Capitalization = Capitalization;
// console.log(Capitalization('FOLLY IS THE MAN'))
function CapitalizationOne(value) {
    return value.toLowerCase().split(' ').map(function (a) { return a[0].toUpperCase() + a.slice(1); }).join(' ');
}
exports.CapitalizationOne = CapitalizationOne;
// console.log(CapitalizationOne('FOLLY IS THE MAN'))
function fixBux(value) {
    for (var i = 0; i < value; i++) {
        if (i % 3 === 0) {
            console.log('fux' + value);
        }
        else if (i % 5 === 0) {
            console.log('buzz' + value);
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log('fuxbuxx' + value);
        }
        else {
            console.log(i);
        }
    }
}
exports.fixBux = fixBux;
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
exports.price = [7, 1, 5, 3, 6, 4];
function maxProfit(price) {
    var maxProfit = 0;
    var minPrice = price[0]; // Start with the first price as the minimum
    for (var i = 1; i < price.length; i++) {
        var currentPrice = price[i];
        // Update the lowest price so far
        minPrice = Math.min(minPrice, currentPrice);
        // Calculate potential profit from current price
        var potentialProfit = currentPrice - minPrice;
        // Update maxProfit if this one is better
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
}
exports.maxProfit = maxProfit;
// console.log(maxProfit(price)); // Output: 5
function chunkArray(data, size) {
    var newArray = [];
    var index = 0;
    while (index < data.length) {
        var sliceNew = data.slice(index, size + index);
        newArray.push(sliceNew);
        index += size;
    }
    return newArray;
}
exports.chunkArray = chunkArray;
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
function TwoSum(value, target) {
    for (var i = 0; i < value.length; i++) {
        for (var j = i + 1; j < value.length; j++) {
            if (value[i] * value[j] === target) {
                console.log("Indices ".concat(i, " and ").concat(j, " add up to the target ").concat(target));
                return [i, j];
            }
        }
    }
}
exports.TwoSum = TwoSum;
var num = [2, 7, 11, 15];
console.log(TwoSum(num, 77));
