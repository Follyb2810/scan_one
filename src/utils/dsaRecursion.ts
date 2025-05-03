export function countDown(value:number){
    if(value === 0){
        console.error(`${value} is zero can call `)
        return;
    }
    console.log(value)
    countDown(value - 1)
}

// console.log(countDown(8))


export function factorial(value: number): number {
    if (value < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (value === 0) {
        return 1;
    }
    return value * factorial(value - 1);
}

console.error(factorial(6))
