"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPairs = exports.findGrocerieIndex = exports.findGroceries = exports.findStudents = exports.getStudents = exports.getStudent = void 0;
var studemt = ['A', 'B', 'c', 'D', 'E'];
function getStudent(studentList, studentName) {
    return studemt.find(function (a) { return a.includes(studentName); });
}
exports.getStudent = getStudent;
function getStudents(studentList, studentName) {
    return studemt.includes(studentName);
}
exports.getStudents = getStudents;
function findStudents(studentList, studentName) {
    for (var i = 0; i < studentList.length; i++) {
        if (studentList[i] === studentName) {
            console.log("this is the student ".concat(studentList[i], " - ").concat(studentName));
        }
    }
}
exports.findStudents = findStudents;
// console.log(getStudent(studemt,'A'))
// console.log(getStudents(studemt,'A'))
// console.log(findStudents(studemt,'A'))
var groceries = ['milk', 'bread', 'egg', 'flour', 'cheeese', 'sugar'];
function findGroceries(item) {
    for (var i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log("found ".concat(item));
        }
        console.log("cantt found ".concat(item));
    }
}
exports.findGroceries = findGroceries;
// findGroceries('rice')
function findGrocerieIndex(item) {
    return groceries[item];
}
exports.findGrocerieIndex = findGrocerieIndex;
// console.log(findGrocerieIndex(2 ))
function findPairs(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log("pairs:".concat(arr[i], " - ").concat(arr[j]));
        }
    }
}
exports.findPairs = findPairs;
findPairs(studemt);
