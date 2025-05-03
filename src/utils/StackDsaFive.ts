//? using the stack  a linear data structure following Lifo
export function isValidParenthese(value:string){
    const stack:Array<string> = []
    const bracket:Record<string,string>={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(const char of value){
        // console.log({ch:bracket[char],char})
        if(bracket[char]){
            stack.push(char)
            // console.log({stack},'1')
        }else{
            const top = stack.pop()
            // console.log({top})
            if(!top || bracket[top] !== char){
                // console.log({stack},'2')
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(isValidParenthese('(){}[]'))
// console.log(isValidParenthese('([)]'))
// console.log(isValidParenthese('()'))
// console.log(isValidParenthese('(")'))


export function reversedStack(value:string){
    const stack = []
    let reverseString=''
    for(const char of value){
        stack.push(char)
    }
    while(stack.length > 0){
        reverseString +=  stack.pop() 
    }
    return reverseString
}

console.log(reversedStack('follyb'))