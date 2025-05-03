"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
    return Node;
}());
exports.Node = Node;
var DoubleLinkList = /** @class */ (function () {
    function DoubleLinkList(value) {
        var newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    DoubleLinkList.prototype.push = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            console.log(this.head, 'the head of push');
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                // console.log(this.head, 'the head of new push');
                // console.log(this.tail, 'the tail of new push');
                // console.log(this.tail.next, 'before this.tail.next of new push');
                this.tail.next = newNode;
                // console.log(this.tail.next, 'after this.tail.next of new push');
                // console.log(newNode.prev, 'before newNode.prev of new push');
                newNode.prev = this.tail;
                // console.log(newNode.prev, 'after newNode.prev of new push');
                // console.log(this.tail, 'before this.tail of new push');
                this.tail = newNode;
                // console.log(this.tail, 'after this.tail of new push');
            }
        }
        this.length++;
        return this;
    };
    DoubleLinkList.prototype.pop = function () {
        if (!this.tail)
            return undefined;
        var temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
            temp.prev = null;
        }
        this.length--;
        return temp;
    };
    DoubleLinkList.prototype.unshift = function (value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    };
    DoubleLinkList.prototype.shift = function () {
        if (this.length === 0 || !this.head)
            return undefined;
        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            temp.next = null;
        }
        this.length--;
        return temp;
    };
    return DoubleLinkList;
}());
exports.DoubleLinkList = DoubleLinkList;
var list = new DoubleLinkList(10);
console.log("Initial:", list);
list.push(20);
console.log("After push: 20", list);
list.push(30);
console.log("After push: 30", list);
list.push(40);
console.log("After push: 40", list);
var popped = list.pop();
console.log("Popped:", popped);
list.unshift(0);
console.log("After unshift:", list);
var shifted = list.shift();
console.log("Shifted:", shifted);
console.log("After all function", list);
