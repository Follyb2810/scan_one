console.log("Algorithm");

export function reverseString(value: string) {
  return value.split(" ").reverse().join("");
}
export function reverseTOString(value: string): string {
  return value.split(" ").reverse().toString();
}
export function reversedString(value: string) {
  let reversed = "";
  for (let i = 0; i <= value.length; i++) {
    reversed = value[i] + reversed;
    // console.log(i)
  }
  return reversed;
}
export function reversedOfString(value: string) {
  let reversed = "";
  for (const char of value) {
    reversed = char + reversed;
    // console.log(char)
  }
  return reversed;
}
export function reversedNumber(value: number) {
  let reversed = "";
  const parseNum = value.toString(); //JSON.stringify(value) //new String(value) // value.toString()
  for (const char of parseNum) {
    reversed = char + reversed;
    // console.log(char)
  }
  console.log("Math.sign", Math.sign(value));
  return parseInt(reversed) * Math.sign(value);
}

export function pallendrome(value: string) {
  let reverse = "";
  for (const char of value) {
    reverse = char + reverse;
  }
  return value == reverse;
}
export function maxShow(value: string) {
  const strinObj: { [key: string]: number } = {};
  let max = 0;
  let maxChar = "";

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (strinObj[char]) {
      strinObj[char]++;
    } else {
      strinObj[char] = 1;
    }
  }

  for (const key in strinObj) {
    if (strinObj[key] > max) {
      max = strinObj[key];
      maxChar = key;
    }
  }

  return { maxChar, count: max };
}

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

export function MaxChar(value: string) {
  const strinObj: Record<string, number> = {};
  let max = 0;
  let maxChar = "";
  // for(const char of value){
  //  strinObj[char] = strinObj[char] ++ | 1
  // }
  for (const char of value) {
    if (strinObj[char]) {
      strinObj[char] = strinObj[char] + 1;
    } else {
      strinObj[char] = 1;
    }
  }
  for (const [key, value] of Object.entries(strinObj)) {
    console.log({ key, value });
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return { maxChar, max };
}

export function ChunkArray<T>(array: Array<T>, size: number) {
  const sliceArray: T[][] = [];
  let index = 0;
  while (index < array.length) {
    console.log(index);
    const newArray = array.slice(index, size + index);
    console.log(newArray);
    sliceArray.push(newArray);
    index += size;
  }
  return sliceArray;
}
export function Capital<T extends string>(value: string): string {
  const newValue = value.split(" ");

  return newValue
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ") as T;
}
export function CapitalA<T extends string>(value: string): string {
  const capitalArray: T[] = [];
  const newValue = value.split(" ");
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
  for (const word of newValue) {
    capitalArray.push((word[0].toUpperCase() + word.slice(1)) as T);
  }

  return capitalArray.join(" ");
}

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
export function CharMap(str: string) {
  str = str.toLowerCase().replace(/[/W]/g, "");
  const charMap: Record<string, number> = {};
  for (const char of str) {
    charMap[char] = charMap[char]++ | 1;
  }
  return charMap;
}
export function Analgram(strinA: string, stringB: string) {
  // let newA = strinA.split('')
  // let newB = strinB.split('')
  const charMapA = CharMap(strinA);
  const charMapB = CharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (const key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }
  return true;
}
export function cleanStr(value: string) {
  return value.toLowerCase().replace(/[/W]/, "").split("").sort().join();
}
export function AnalgramB(stringA: string, stringB: string) {
  return cleanStr(stringA) === cleanStr(stringB);
}

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

export function changeObject(value: string) {
  const obj: Record<string, number> = {};
  for (const key of value.toLowerCase()) {
    obj[key] = (obj[key] || 0) + 1;
  }
  return obj;
}

export function vowelCount(value: string) {
  const vowels = "aeiou";
  const wordFreq = changeObject(value);
  let count = 0;

  for (const key of vowels) {
    if (wordFreq[key]) {
      count += wordFreq[key];
    }
  }

  return count;
}

export function vowelCountB(value: string) {
  const matches = value.match(/[aeiou]/gi);
  const charMap: Record<string, number> = {};
  console.log(matches);
  if (matches) {
    for (const char of matches) {
      console.log(char);
      charMap[char] = (charMap[char] || 0) + 1;
    }
  }
  return charMap;
}
export function vowelCountC(value: string) {
  const matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

export function vowelCountD(value: string) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const key of value.toLowerCase()) {
    if (vowel.includes(key)) {
      count++;
    }
  }

  return count;
}

export function fuzzBuzz<T>(n: T) {
  let limit: number;

  if (typeof n === "number") {
    limit = n;
  } else if (typeof n === "string" || Array.isArray(n)) {
    limit = n.length;
  } else {
    throw new Error("Unsupported type");
  }

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fuzzbuzz");
    } else if (i % 3 === 0) {
      console.log("fuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// const result =Capital('the house on the rock')
// const result =vowelCountB('the house on the rock')
// const result =vowelCount('the house on the rock')
// const result =vowelCountD('the house on the rock')
// const result =fuzzBuzz(6)
// console.log(result)
// fuzzBuzz(16);
// fuzzBuzz("hello world!");
// fuzzBuzz([1, 2, 3, 4, 5, 6]);

export function fuzzBuzzWord<T>(n: T): (string | number)[] {
  let limit: number;

  if (typeof n === "number") {
    limit = n;
  } else if (typeof n === "string" || Array.isArray(n)) {
    limit = n.length;
  } else {
    throw new Error("Unsupported type: must be number, string, or array");
  }

  const result: (string | number)[] = [];

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fuzzbuzz");
    } else if (i % 3 === 0) {
      result.push("fuzz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}
// console.log(fuzzBuzzWord(16));

// console.log(fuzzBuzzWord("hello"));

// console.log(fuzzBuzzWord(["a", "b", "c", "d", "e", "f"]));
export function stepShape(value: number) {
  // const N = '#'
  const newArry: Array<string> = [];
  for (let row = 1; row <= value; row++) {
    let line = "";
    for (let col = 1; col <= value; col++) {
      //  line += '#'
      if (col <= row) {
        line += "#";
      } else {
        line += " ";
      }
      // newArry.push(N)
      // console.log(N )
    }
    console.log(line);
  }
  return newArry;
}

// stepShape(4)

export function Pyramid(value: number) {
  const mid = Math.floor((2 * value - 1) / 2);
  for (let row = 0; row < value; row++) {
    let line = "";
    for (let col = 0; col <= 2 * value - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}
export function matrixa(value:number){
    const result:number[][] = []
    let counter=1, startRow =0,endRow = value -1,startCol =0,endCol=value-1;
    while(startRow <= endRow && startCol <= endCol ){
        for(let i =0;i < value;i++){
            result.push([])
        }
        //?Top
        for(let i = startCol;i < endCol;i++){
            result[startRow][i] = counter;
            counter++
        }
        startRow++
        //? Right
        for(let i = startRow;i < endRow;i++){
            result[i][endCol] = counter;
            counter++
        }
        endCol--
        //? bottom
        for(let i = endCol;i >= startCol;i--){
            result[endRow][i] = counter;
            counter++
        }
        endRow--
        //? left
        for(let i = endRow;i >= startRow;i--){
            result[i][startCol] = counter;
            counter++
        }
        startCol++
    }
    
    
    return result 
}

const resultz =matrixa(6)
console.log(resultz)

// Pyramid(6);
export function matrix(value: number): number[][] {
    // Array.from({ length: value }, () => Array(value).fill(0))
    const result: number[][] =[];
    let counter = 1;
    let startRow = 0, endRow = value - 1;
    let startCol = 0, endCol = value - 1;

    while (startRow <= endRow && startCol <= endCol) {
                for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter++;
        }
        endCol--;
        
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result[endRow][i] = counter++;
            }
            endRow--;
        }
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                result[i][startCol] = counter++;
            }
            startCol++;
        }
    }

    return result;
}

const result = matrix(6);
console.log(result);
