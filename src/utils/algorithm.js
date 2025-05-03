"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrix = exports.Pyramid = exports.stepShape = exports.fuzzBuzzWord = exports.fuzzBuzz = exports.vowelCountD = exports.vowelCountC = exports.vowelCountB = exports.vowelCount = exports.changeObject = exports.AnalgramB = exports.cleanStr = exports.Analgram = exports.CharMap = exports.CapitalA = exports.Capital = exports.ChunkArray = exports.MaxChar = exports.maxShow = exports.pallendrome = exports.reversedNumber = exports.reversedOfString = exports.reversedString = exports.reverseTOString = exports.reverseString = void 0;
console.log("Algorithm");
function reverseString(value) {
    return value.split(" ").reverse().join("");
}
exports.reverseString = reverseString;
function reverseTOString(value) {
    return value.split(" ").reverse().toString();
}
exports.reverseTOString = reverseTOString;
function reversedString(value) {
    var reversed = "";
    for (var i = 0; i <= value.length; i++) {
        reversed = value[i] + reversed;
        // console.log(i)
    }
    return reversed;
}
exports.reversedString = reversedString;
function reversedOfString(value) {
    var reversed = "";
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        reversed = char + reversed;
        // console.log(char)
    }
    return reversed;
}
exports.reversedOfString = reversedOfString;
function reversedNumber(value) {
    var reversed = "";
    var parseNum = value.toString(); //JSON.stringify(value) //new String(value) // value.toString()
    for (var _i = 0, parseNum_1 = parseNum; _i < parseNum_1.length; _i++) {
        var char = parseNum_1[_i];
        reversed = char + reversed;
        // console.log(char)
    }
    console.log("Math.sign", Math.sign(value));
    return parseInt(reversed) * Math.sign(value);
}
exports.reversedNumber = reversedNumber;
function pallendrome(value) {
    var reverse = "";
    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
        var char = value_2[_i];
        reverse = char + reverse;
    }
    return value == reverse;
}
exports.pallendrome = pallendrome;
function maxShow(value) {
    var strinObj = {};
    var max = 0;
    var maxChar = "";
    for (var i = 0; i < value.length; i++) {
        var char = value[i];
        if (strinObj[char]) {
            strinObj[char]++;
        }
        else {
            strinObj[char] = 1;
        }
    }
    for (var key in strinObj) {
        if (strinObj[key] > max) {
            max = strinObj[key];
            maxChar = key;
        }
    }
    return { maxChar: maxChar, count: max };
}
exports.maxShow = maxShow;
/**
for (let a of Object.entries(obj)) {
    const entry = { key: a[0], value: a[1] };
    console.log({ a: entry.key, b: entry.value });
}
let obj = { a: 1, b: 2 };

for (let a of Object.entries(obj)) {
    const [key, value] = a;
    console.log({ a: key, b: value });
}

*/
function MaxChar(value) {
    var strinObj = {};
    var max = 0;
    var maxChar = "";
    // for(const char of value){
    //  strinObj[char] = strinObj[char] ++ | 1
    // }
    for (var _i = 0, value_3 = value; _i < value_3.length; _i++) {
        var char = value_3[_i];
        if (strinObj[char]) {
            strinObj[char] = strinObj[char] + 1;
        }
        else {
            strinObj[char] = 1;
        }
    }
    for (var _a = 0, _b = Object.entries(strinObj); _a < _b.length; _a++) {
        var _c = _b[_a], key = _c[0], value_4 = _c[1];
        console.log({ key: key, value: value_4 });
        if (value_4 > max) {
            max = value_4;
            maxChar = key;
        }
    }
    return { maxChar: maxChar, max: max };
}
exports.MaxChar = MaxChar;
function ChunkArray(array, size) {
    var sliceArray = [];
    var index = 0;
    while (index < array.length) {
        console.log(index);
        var newArray = array.slice(index, size + index);
        console.log(newArray);
        sliceArray.push(newArray);
        index += size;
    }
    return sliceArray;
}
exports.ChunkArray = ChunkArray;
function Capital(value) {
    var newValue = value.split(" ");
    return newValue
        .map(function (word) { return word[0].toUpperCase() + word.slice(1); })
        .join(" ");
}
exports.Capital = Capital;
function CapitalA(value) {
    var capitalArray = [];
    var newValue = value.split(" ");
    //? mine
    // for (let i = 0; i < newValue.length; i++) {
    //     const word = newValue[i];
    //     const convert = word.slice(0, 1).toUpperCase();
    //     const remain = word.slice(1);
    //     const newWord = (convert + remain) as T;
    //     capitalArray.push(newWord);
    //     // console.log(convert);
    //     // console.log(remain);
    // }
    // tutor
    for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
        var word = newValue_1[_i];
        capitalArray.push((word[0].toUpperCase() + word.slice(1)));
    }
    return capitalArray.join(" ");
}
exports.CapitalA = CapitalA;
// export function Capital<T>(value:string){
//     const capitalArray:T[]=[]
//     const newValue = value.split('')
//     for(let i = 0;i <newValue.length;i++){
//         const convert = newValue[i].slice(0,1).toUpperCase()
//         const remain = newValue[i].slice(1,newValue[i].length)
//         const newWord:T = (convert+remain) as T
//         capitalArray.push(newWord)
//         console.log(convert)
//         console.log(remain)
//     }
//     return capitalArray
// }
// const result =reverseString('hello')
// const result =reversedString('hello')
// const result =reversedOfString('hello')
// const result =reverseTOString('hello')
// const result =reversedNumber(123)
// const result =pallendrome('123')
// const result =maxShow('123')
// const result =MaxChar('12333333')
// const result =maxShow('12333333')
// const result =ChunkArray([1,2,3,4,5,6,7,8,9,0],2)
function CharMap(str) {
    str = str.toLowerCase().replace(/[/W]/g, "");
    var charMap = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charMap[char] = charMap[char]++ | 1;
    }
    return charMap;
}
exports.CharMap = CharMap;
function Analgram(strinA, stringB) {
    // let newA = strinA.split('')
    // let newB = strinB.split('')
    var charMapA = CharMap(strinA);
    var charMapB = CharMap(stringB);
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
        return false;
    for (var key in charMapA) {
        if (charMapA[key] !== charMapB[key])
            return false;
    }
    return true;
}
exports.Analgram = Analgram;
function cleanStr(value) {
    return value.toLowerCase().replace(/[/W]/, "").split("").sort().join();
}
exports.cleanStr = cleanStr;
function AnalgramB(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB);
}
exports.AnalgramB = AnalgramB;
// export function changeObject(value:string){
//     const obj:Record<string,number> ={}
//     for(const key of value.split('')){
//         obj[key] = (obj[key] | 0) + 1
//     }
//     return obj
// }
// export function vowelCount(value:string){
//     // const charMap:Record<string,number> ={}
//     let count = 0
//     const vowel = 'aeiou'
//     const v = changeObject(vowel)
//     const words = changeObject(value)
//     console.log(words)
//     console.log(v)
//     for(const key in words){
//         console.log({k})
//         if(words[key] == v[key]){
//             console.log(words[key])
//             count = count + 1
//         }
//     }
//     return count
// }
function changeObject(value) {
    var obj = {};
    for (var _i = 0, _a = value.toLowerCase(); _i < _a.length; _i++) {
        var key = _a[_i];
        obj[key] = (obj[key] || 0) + 1;
    }
    return obj;
}
exports.changeObject = changeObject;
function vowelCount(value) {
    var vowels = "aeiou";
    var wordFreq = changeObject(value);
    var count = 0;
    for (var _i = 0, vowels_1 = vowels; _i < vowels_1.length; _i++) {
        var key = vowels_1[_i];
        if (wordFreq[key]) {
            count += wordFreq[key];
        }
    }
    return count;
}
exports.vowelCount = vowelCount;
function vowelCountB(value) {
    var matches = value.match(/[aeiou]/gi);
    var charMap = {};
    console.log(matches);
    if (matches) {
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var char = matches_1[_i];
            console.log(char);
            charMap[char] = (charMap[char] || 0) + 1;
        }
    }
    return charMap;
}
exports.vowelCountB = vowelCountB;
function vowelCountC(value) {
    var matches = value.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
exports.vowelCountC = vowelCountC;
function vowelCountD(value) {
    var vowel = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var _i = 0, _a = value.toLowerCase(); _i < _a.length; _i++) {
        var key = _a[_i];
        if (vowel.includes(key)) {
            count++;
        }
    }
    return count;
}
exports.vowelCountD = vowelCountD;
function fuzzBuzz(n) {
    var limit;
    if (typeof n === "number") {
        limit = n;
    }
    else if (typeof n === "string" || Array.isArray(n)) {
        limit = n.length;
    }
    else {
        throw new Error("Unsupported type");
    }
    for (var i = 1; i < limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fuzzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fuzz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }
}
exports.fuzzBuzz = fuzzBuzz;
// const result =Capital('the house on the rock')
// const result =vowelCountB('the house on the rock')
// const result =vowelCount('the house on the rock')
// const result =vowelCountD('the house on the rock')
// const result =fuzzBuzz(6)
// console.log(result)
// fuzzBuzz(16);
// fuzzBuzz("hello world!");
// fuzzBuzz([1, 2, 3, 4, 5, 6]);
function fuzzBuzzWord(n) {
    var limit;
    if (typeof n === "number") {
        limit = n;
    }
    else if (typeof n === "string" || Array.isArray(n)) {
        limit = n.length;
    }
    else {
        throw new Error("Unsupported type: must be number, string, or array");
    }
    var result = [];
    for (var i = 1; i < limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("fuzzbuzz");
        }
        else if (i % 3 === 0) {
            result.push("fuzz");
        }
        else if (i % 5 === 0) {
            result.push("buzz");
        }
        else {
            result.push(i);
        }
    }
    return result;
}
exports.fuzzBuzzWord = fuzzBuzzWord;
// console.log(fuzzBuzzWord(16));
// console.log(fuzzBuzzWord("hello"));
// console.log(fuzzBuzzWord(["a", "b", "c", "d", "e", "f"]));
function stepShape(value) {
    // const N = '#'
    var newArry = [];
    for (var row = 1; row <= value; row++) {
        var line = "";
        for (var col = 1; col <= value; col++) {
            //  line += '#'
            if (col <= row) {
                line += "#";
            }
            else {
                line += " ";
            }
            // newArry.push(N)
            // console.log(N )
        }
        console.log(line);
    }
    return newArry;
}
exports.stepShape = stepShape;
// stepShape(4)
function Pyramid(value) {
    var mid = Math.floor((2 * value - 1) / 2);
    for (var row = 0; row < value; row++) {
        var line = "";
        for (var col = 0; col <= 2 * value - 1; col++) {
            if (col >= mid - row && col <= mid + row) {
                line += "#";
            }
            else {
                line += " ";
            }
        }
        console.log(line);
    }
}
exports.Pyramid = Pyramid;
// Pyramid(6);
function matrix(value) {
    var result = Array.from({ length: value }, function () { return Array(value).fill(0); });
    var counter = 1;
    var startRow = 0, endRow = value - 1;
    var startCol = 0, endCol = value - 1;
    while (startRow <= endRow && startCol <= endCol) {
        // Top row
        for (var i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter++;
        }
        startRow++;
        // Right column
        for (var i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter++;
        }
        endCol--;
        // Bottom row
        if (startRow <= endRow) {
            for (var i = endCol; i >= startCol; i--) {
                result[endRow][i] = counter++;
            }
            endRow--;
        }
        // Left column
        if (startCol <= endCol) {
            for (var i = endRow; i >= startRow; i--) {
                result[i][startCol] = counter++;
            }
            startCol++;
        }
    }
    return result;
}
exports.matrix = matrix;
var result = matrix(6);
console.log(result);
