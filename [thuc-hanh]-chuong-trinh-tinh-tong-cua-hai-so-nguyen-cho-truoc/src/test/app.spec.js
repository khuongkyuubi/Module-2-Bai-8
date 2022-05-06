"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe("add function", function () {
    test("add two number", function () {
        var number1 = 1;
        var number2 = 2;
        var result = 3;
        expect(app_1.Calculator.add(number1, number2)).toBe(result);
    });
});
