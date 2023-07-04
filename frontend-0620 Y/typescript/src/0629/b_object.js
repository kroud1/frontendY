//  객체
var obj = {
    name: "SeungAh",
    age: 90,
};
//! 객체에서 속성 접근
//? 점 표기법
console.log(obj.name); // SeungAh
obj.name = "SeungAh2"; // 객체의 속성 수정하는 법
//? 대괄호 표기법
console.log(obj["age"]); // 90
//! 객체와 함수
var obj2 = {
    name: "SeungAh",
    age: 90,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    },
};
console.log(obj2.greet()); // Hello, my name is SeungAh
