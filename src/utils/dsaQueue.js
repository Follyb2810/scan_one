"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.next = null;
        this.value = value;
    }
    return Node;
}());
exports.Node = Node;
var Queue = /** @class */ (function () {
    function Queue(value) {
        var newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            if (this.last) {
                this.last.next = newNode;
                this.last = newNode;
            }
        }
        this.length++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return undefined;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue(0);
queue.enqueue(1);
console.log(queue, "after enqueue 1");
queue.enqueue(2);
console.log(queue, "after enqueue 2");
// console.log(queue.dequeue(), "after dequeue");
// console.log(queue, "queue after dequeue");
