"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe(' FizzBuzz Translate Testing', function () {
    test("FizzBuzz Triangle", function () {
        expect((new app_1.FizzBuzzTranslate(42)).translate()).toBe("Fizz");
        expect((new app_1.FizzBuzzTranslate(35)).translate()).toBe("Buzz");
        expect((new app_1.FizzBuzzTranslate(30)).translate()).toBe("FizzBuzz");
        expect((new app_1.FizzBuzzTranslate(31)).translate()).toBe("Hello");
    });
});
