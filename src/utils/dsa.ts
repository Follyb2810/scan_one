const studemt = ['A','B','c','D','E']

export function getStudent(studentList:Array<string>,studentName:string){
    return studemt.find((a)=> a.includes(studentName))
}
export function getStudents(studentList:Array<string>,studentName:string){
    return studemt.includes(studentName)
}
export function findStudents(studentList:Array<string>,studentName:string){
    for(let i =0;i<studentList.length;i++){
        if(studentList[i] === studentName){
            console.log(`this is the student ${studentList[i]} - ${studentName}`)
        }
    }
}

// console.log(getStudent(studemt,'A'))
// console.log(getStudents(studemt,'A'))
// console.log(findStudents(studemt,'A'))
const groceries =['milk','bread','egg','flour','cheeese','sugar']
//? 0(n)
export function findGroceries(item:string){
    for(let i = 0;i<groceries.length;i++){
        if(groceries[i] === item){
            console.log(`found ${item}`)
        }
        console.log(`cantt found ${item}`)
        
    }
}
// findGroceries('rice')
//? 0(1)
export function findGrocerieIndex(item:number){
    return groceries[item]
}

// console.log(findGrocerieIndex(2 ))
//? 0(n^2)
export function findPairs<T>(arr:T[]){
    for(let i =0;i < arr.length;i++){
        for(let j =0;j < arr.length;j++){
            console.log(`pairs:${arr[i]} - ${arr[j]}`)
        }
    }
}

findPairs(studemt)