"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe('BasicCalulator Testing', function () {
    var calc = new app_1.BasicCalculator();
    test('should return an instance of a basic calculator', function () {
        expect(calc).toEqual({});
    });
    test('should return the addition of a + b', function () {
        expect(calc.add(1, 3)).toEqual(4);
    });
    test('should return the subtraction of a - b', function () {
        expect(calc.subtract(1, 3)).toEqual(-2);
    });
    test('should return the multple of a * b', function () {
        expect(calc.multiple(1, 3)).toEqual(3);
    });
    test('should return the divide of a / b', function () {
        expect(calc.divide(1, 3)).toEqual(1 / 3);
    });
});
