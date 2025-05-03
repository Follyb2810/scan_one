"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.next = null;
        this.value = value;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack(value) {
        var newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this.first)
            return undefined;
        var temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.first) === null || _a === void 0 ? void 0 : _a.value;
    };
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    Stack.prototype.min = function () {
        if (this.length === 0)
            return undefined;
        var current = this.first;
        var minValue = current === null || current === void 0 ? void 0 : current.value;
        while (current === null || current === void 0 ? void 0 : current.next) {
            current = current.next;
            if (current.value < minValue) {
                console.log("".concat(minValue, ":").concat(current.value));
                minValue = current.value;
            }
        }
        return minValue;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack(1);
stack.push(1);
console.log(stack, "after push 1");
stack.push(2);
console.log(stack, "after push 2");
stack.push(3);
console.log(stack, "after push 3");
stack.push(4);
console.log(stack, "after push 4");
console.log(stack.pop(), "popped item");
console.log(stack, "after pop");
console.log(stack.min(), "min valie");
console.log(stack, 'this is the stack');
