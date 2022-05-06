"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzTranslate = void 0;
var FizzBuzzTranslate = /** @class */ (function () {
    function FizzBuzzTranslate(number) {
        this.number = number;
    }
    FizzBuzzTranslate.prototype.translate = function () {
        if (this.number % 15 === 0) {
            return "FizzBuzz";
        }
        if (this.number % 5 === 0) {
            return "Buzz";
        }
        if (this.number % 3 === 0) {
            return "Fizz";
        }
        return "Hello";
    };
    return FizzBuzzTranslate;
}());
exports.FizzBuzzTranslate = FizzBuzzTranslate;
