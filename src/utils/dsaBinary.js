"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binary = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.Node = Node;
var Binary = /** @class */ (function () {
    function Binary() {
        this.root = null;
    }
    Binary.prototype.insert = function (value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value)
                return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    };
    Binary.prototype.include = function (value) {
        if (!this.root)
            return false;
        var temp = this.root;
        while (temp) {
            if (value < temp.value) {
                if (temp.left) {
                    temp = temp.left;
                }
            }
            else if (value > temp.value) {
                if (temp.right) {
                    temp = temp.right;
                }
            }
            else if (value === temp.value) {
                return true;
            }
        }
        return false;
    };
    return Binary;
}());
exports.Binary = Binary;
var tree = new Binary();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(JSON.stringify(tree, null, 2));
console.log(tree.include(5));
