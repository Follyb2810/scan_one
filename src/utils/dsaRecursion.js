"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.countDown = void 0;
function countDown(value) {
    if (value === 0) {
        console.error("".concat(value, " is zero can call "));
        return;
    }
    console.log(value);
    countDown(value - 1);
}
exports.countDown = countDown;
// console.log(countDown(8))
function factorial(value) {
    if (value < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (value === 0) {
        return 1;
    }
    return value * factorial(value - 1);
}
exports.factorial = factorial;
console.error(factorial(6));
