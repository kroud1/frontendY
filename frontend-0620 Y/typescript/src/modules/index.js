"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson2 = void 0;
const Person_1 = require("./person/Person");
const testMakePerson2 = () => {
    let daeho = (0, Person_1.makePerson)("Daeho");
    let share = (0, Person_1.makePerson)("Share");
    console.log(daeho, share);
};
exports.testMakePerson2 = testMakePerson2;
(0, exports.testMakePerson2)();
