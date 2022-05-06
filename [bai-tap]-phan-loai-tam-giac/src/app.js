"use strict";
// export enum Radian {
//     PI = 3.1415926535897936,
//     EQUILATERAL_ANGLE = PI / 3
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleClassifier = void 0;
var TriangleClassifier = /** @class */ (function () {
    function TriangleClassifier(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    TriangleClassifier.prototype.setSide = function (side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    };
    TriangleClassifier.prototype.isTriangle = function () {
        return !(this.side1 + this.side2 <= this.side3 || this.side3 + this.side2 <= this.side1 || this.side1 + this.side3 <= this.side2);
    };
    TriangleClassifier.prototype.isIsoscelesTriangle = function () {
        return this.isTriangle() && (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
    };
    TriangleClassifier.prototype.isEquilateralTriangle = function () {
        // return this.isIsoscelesTriangle() && (Math.acos((this.side1 / 2) / this.side2) === Radian.EQUILATERAL_ANGLE / 3);
        return this.isTriangle() && (this.side1 === this.side2 && this.side1 === this.side3);
    };
    TriangleClassifier.prototype.checkType = function () {
        if (this.isEquilateralTriangle()) {
            return "Equilateral Triangle";
        }
        if (this.isIsoscelesTriangle()) {
            return "Isosceles Triangle";
        }
        if (this.isTriangle()) {
            return "Normal Triangle";
        }
        return "Not a triangle";
    };
    return TriangleClassifier;
}());
exports.TriangleClassifier = TriangleClassifier;
// let test = new TriangleClassifier(5, 5, 5);
// console.log(test.checkType());
