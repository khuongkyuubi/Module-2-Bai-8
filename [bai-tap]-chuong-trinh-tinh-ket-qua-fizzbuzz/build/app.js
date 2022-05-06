"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzTranslate = void 0;
class FizzBuzzTranslate {
    constructor(number) {
        this.number = number;
    }
    translate() {
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
    }
}
exports.FizzBuzzTranslate = FizzBuzzTranslate;
