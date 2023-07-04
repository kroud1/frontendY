"use strict";
// 인터페이스
Object.defineProperty(exports, "__esModule", { value: true });
var student6;
student6 = {
    born: 2000,
    name: "seungah",
};
function printLabel(labbelledObj) {
    console.log(labbelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var userA = { name: "SeungAh", age: 99 };
var userB = { name: "SeungAh", age: 99, etc: true };
//익명 인터페이스
var ceo = { name: "seungah", age: 88 };
function printCeo(me) {
    console.log(me.etc ? "".concat(me.name, " ").concat(me.age, " ").concat(me.etc) : "".concat(me.name, " ").concat(me.age));
}
printCeo(ceo);
