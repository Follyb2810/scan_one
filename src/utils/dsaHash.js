"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 5; }
        this.keyMap = new Array(size);
        console.log({ key: this.keyMap });
    }
    HashTable.prototype._hashFunction = function (key) {
        var PRIME_NUMBER = 31;
        var sum = 0;
        for (var i = 0; i < Math.min(key.length, 1000); i++) {
            var charCode = key.charCodeAt(i) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return sum;
    };
    HashTable.prototype.set = function (key, value) {
        var index = this._hashFunction(key);
        console.log("Index for ".concat(key, ": ").concat(index));
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    };
    HashTable.prototype.get = function (key) {
        var index = this._hashFunction(key);
        if (!this.keyMap[index]) {
            return undefined;
        }
        for (var _i = 0, _a = this.keyMap[index]; _i < _a.length; _i++) {
            var _b = _a[_i], storedKey = _b[0], storedValue = _b[1];
            if (storedKey === key) {
                return storedValue;
            }
        }
        return undefined;
    };
    HashTable.prototype.getAllKey = function () {
        var keys = [];
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    };
    HashTable.prototype.getAllValue = function () {
        var values = [];
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
var phoneBook = new HashTable();
phoneBook.set('folly', '555-555-555');
phoneBook.set('john', '123-456-789');
phoneBook.set('john', '653-356-199');
console.log(phoneBook);
console.log(phoneBook.get('folly'));
console.log(phoneBook.get('john'));
console.log(phoneBook.get('nonexistent'));
console.log(phoneBook.getAllValue());
console.log(phoneBook.getAllKey());
// [
//     [
//       ["item1", { id: 1, name: "Alpha" }],
//       ["item2", { id: 2, name: "Beta" }]
//     ],
//     [
//       ["item3", { id: 3, name: "Gamma" }]
//     ]
//   ];
