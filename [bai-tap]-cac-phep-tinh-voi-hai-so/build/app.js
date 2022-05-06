"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicCalculator = void 0;
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    BasicCalculator.prototype.add = function (a, b) {
        return a + b;
    };
    BasicCalculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    BasicCalculator.prototype.multiple = function (a, b) {
        return a * b;
    };
    BasicCalculator.prototype.divide = function (a, b) {
        return a / b;
    };
    return BasicCalculator;
}());
exports.BasicCalculator = BasicCalculator;
