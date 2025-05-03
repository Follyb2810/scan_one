"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSums = exports.TwoSum = exports.num = exports.wordCounter = exports.countName = exports.name = void 0;
exports.name = 'Hello my name name name is is huxn';
function countName(value) {
    var newObj = {};
    var newWords = value.split(' ');
    for (var i = 0; i < newWords.length; i++) {
        var word = newWords[i];
        newObj[word] = (newObj[word] || 0) + 1;
    }
    return newObj;
}
exports.countName = countName;
// console.log(countName(name));
function wordCounter(value) {
    var lowerText = value.toLowerCase();
    var wordMap = {};
    var words = lowerText.split(/\s+/);
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word in wordMap) {
            wordMap[word]++;
        }
        else {
            wordMap[word] = 1;
        }
    }
    return wordMap;
}
exports.wordCounter = wordCounter;
// console.log(wordCounter(name));
// exports.num = [2, 7, 10, 10];
exports.num = [2, 7, 11, 15];
function TwoSum(value, target) {
    for (var i = 0; i < value.length; i++) {
        for (var j = 1; j <= value.length; j++) {
            if (value[i] + value[j] === target) {
                console.log("".concat(i, " * ").concat(j, " equls ").concat(target));
                return [i, j];
            }
        }
    }
}
exports.TwoSum = TwoSum;
// console.log(TwoSum(exports.num, 9));
function TwoSums(value, target) {
    var numMap = {};
    for (var i = 0; i < value.length; i++) {
        console.log({numMap})
        var compliment = target - value[i];
        console.log({a:numMap[compliment],i,target,compliment})
        if (compliment in numMap && numMap[compliment] !== i) {
            console.log("".concat(i, " * ").concat(numMap[compliment], " equls ").concat(target));
            return [numMap[compliment], i];
        }
        numMap[value[i]] = i;
    }
    return [];
}
exports.TwoSums = TwoSums;
console.log(TwoSums(exports.num, 9));
