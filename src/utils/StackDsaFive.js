"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reversedStack = exports.isValidParenthese = void 0;
//? using the stack  a linear data structure following Lifo
function isValidParenthese(value) {
    var stack = [];
    var bracket = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        // console.log({ch:bracket[char],char})
        if (bracket[char]) {
            stack.push(char);
            // console.log({stack},'1')
        }
        else {
            var top_1 = stack.pop();
            // console.log({top})
            if (!top_1 || bracket[top_1] !== char) {
                // console.log({stack},'2')
                return false;
            }
        }
    }
    return stack.length === 0;
}
exports.isValidParenthese = isValidParenthese;
// console.log(isValidParenthese('(){}[]'))
// console.log(isValidParenthese('([)]'))
// console.log(isValidParenthese('()'))
// console.log(isValidParenthese('(")'))
function reversedStack(value) {
    var stack = [];
    var reverseString = '';
    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
        var char = value_2[_i];
        stack.push(char);
    }
    while (stack.length > 0) {
        reverseString += stack.pop();
    }
    return reverseString;
}
exports.reversedStack = reversedStack;
console.log(reversedStack('follyb'));
