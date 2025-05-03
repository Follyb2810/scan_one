export const name = 'Hello my name name name is is huxn'

export function countName(value: string) {
    const newObj: Record<string, number> = {};
    const newWords = value.split(' '); 

    for (let i = 0; i < newWords.length; i++) {
        const word = newWords[i];
        newObj[word] = (newObj[word] || 0) + 1;
    }

    return newObj;
}

// console.log(countName(name));


export function wordCounter(value:string){
    const lowerText = value.toLowerCase()
    const wordMap :Record<string, number>={}
    const words =lowerText.split(/\s+/)
    for(const word of words){
        if(word in wordMap){
            wordMap[word]++
        }else{
            wordMap[word] = 1
        }
    }
    return wordMap
}
// console.log(wordCounter(name));
export const num =[2,7,11,15]
export function TwoSum(value:Array<number>,target:number){
    for(let i =0;i < value.length;i++){
        for(let j =1;j <= value.length;j++){
            if(value[i] + value[j] === target){
                console.log(`${i} * ${j} equls ${target}`)
                return[i,j]
            }
        }
    }
}
console.log(TwoSum(num,9))

export function TwoSums(value:Array<number>,target:number){
    const numMap :Record<string, number>={}
    for(let i = 0;i < value.length;i++){
        const compliment  = target - value[i]
        if(compliment in numMap  && numMap[compliment] !== i){
            console.log(`${i} * ${numMap[compliment]} equls ${target}`)
            return [numMap[compliment],i]
        }
        numMap[value[i]] = i
    }
    return []
}

console.log(TwoSum(num,17))