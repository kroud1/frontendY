// 클래스
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
// 기본형태
// class 클래스 이름 {
//     [private | protected | public] 속성이름: 속성타입
// }
var User = /** @class */ (function () {
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.greet = function () {
    return "Hello, ".concat(this.name);
  };
  return User;
})();
var user = new User("SeungAh", 99);
console.log(user);
// 클래스의 생성자(constructor) -> 메서드
var Student = /** @class */ (function () {
  function Student(name, age) {
    this.name = name;
    this.age = age;
  }
  return Student;
})();
var Student2 = /** @class */ (function () {
  function Student2(name, age) {
    this.name = name;
    this.age = age;
  }
  return Student2;
})();
var jimin = new Student2("jimin", 88);
console.log(jimin);
// 접근 제어자
// 클래스 속성은 public, private, protected와 같은 접근 제한자를 속성 이름 앞에 붙일 수 있다.
// 만약에 생략하면 모두 public으로 간주
//* public(기본값): 어디서든 접근 가능
// 클래스 내부, 하위 클래스, 인스턴스 등 모든 곳에서 해당 멤버를 볼 수 있다.
// 명시적 표시X
var Car = /** @class */ (function () {
  function Car(color) {
    this.color = color;
  }
  return Car;
})();
//* private: 오직 해당 클래스 내부에서만 접근 가능합니다.
// 클래스 외부, 하위 클래스에서는 이 멤버를 볼 수 없습니다.
var Car2 = /** @class */ (function () {
  function Car2() {
    this.engineOn = false;
  }
  Car2.prototype.startEngine = function () {
    this.engineOn = true;
  };
  return Car2;
})();
// new Car2(true).engineOn; : Error: 'engineOn' 속성은 private이며 'Car2' 클래스 내에서만 액세스할 수 있습니다.
//* protected 해당 클래스와 하위 클래스 내부에서 접근 가능합니다.
//private 유사하게 외부에서는 볼 수 없지만, prtected는 하위 클래스에서는 접근 가능합니다.
var Vehicle = /** @class */ (function () {
  function Vehicle() {
    this.speed = 0;
  }
  return Vehicle;
})();
var Car3 = /** @class */ (function (_super) {
  __extends(Car3, _super);
  function Car3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Car3.prototype.accelerate = function () {
    this.speed += 10; //  'speed'가 protected이기 때문에 하위 클래스에서 접근 가능
  };
  return Car3;
})(Vehicle);
var PerA = /** @class */ (function () {
  function PerA() {}
  return PerA;
})();
// 추상 클래스
// abstract 키웓 사용
var teacher = /** @class */ (function () {
  function teacher(age) {
    this.age = age;
  }
  return teacher;
})();
// 속성 앞에 abstract : new연산자를 사용해서 객체를 만들 수 X
// 클래스의 상속
var Animal = /** @class */ (function () {
  function Animal() {}
  Animal.prototype.move = function (distance) {
    if (distance === void 0) {
      distance = 0;
    }
    console.log("Animal moved ".concat(distance, "m."));
  };
  return Animal;
})();
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dog.prototype.bark = function () {
    console.log("woof! woof! woof!");
  };
  return Dog;
})(Animal);
var dog = new Dog();
dog.bark();
dog.move(10);
