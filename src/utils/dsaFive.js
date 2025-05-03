"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidParenthese = void 0;
function isValidParenthese(value) {
    var stack = [];
    var bracket = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        console.log({ ch: bracket[char], char: char });
        if (bracket[char]) {
            stack.push(char);
            console.log({ stack: stack }, '1');
        }
        else {
            var top_1 = stack.pop();
            console.log({ top: top_1 ,br:bracket[top_1]});
            if (!top_1 || bracket[top_1] !== char) {
                console.log({ stack: stack }, '2');
                return false;
            }
        }
    }
    return stack.length === 0;
}
exports.isValidParenthese = isValidParenthese;
console.log(isValidParenthese('(){}[]'));
console.log(isValidParenthese('([)]'));
console.log(isValidParenthese('()'));
console.log(isValidParenthese('(")'));
