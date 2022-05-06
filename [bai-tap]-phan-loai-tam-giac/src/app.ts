// export enum Radian {
//     PI = 3.1415926535897936,
//     EQUILATERAL_ANGLE = PI / 3
// }

export class TriangleClassifier {
    public side1: number;
    public side2: number;
    public side3: number;

    constructor(side1: number, side2: number, side3: number) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    setSide(side1: number, side2: number, side3: number) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    isTriangle(): boolean {
        return !(this.side1 + this.side2 <= this.side3 || this.side3 + this.side2 <= this.side1 || this.side1 + this.side3 <= this.side2)
    }

    isIsoscelesTriangle(): boolean {
        return this.isTriangle() && (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
    }

    isEquilateralTriangle(): boolean {
        // return this.isIsoscelesTriangle() && (Math.acos((this.side1 / 2) / this.side2) === Radian.EQUILATERAL_ANGLE / 3);
        return this.isTriangle() && (this.side1 === this.side2 && this.side1 === this.side3);
    }

    checkType(): string {

        if (this.isEquilateralTriangle()) {
            return "Equilateral Triangle"
        }
        if (this.isIsoscelesTriangle()) {
            return "Isosceles Triangle";
        }
        if (this.isTriangle()) {
            return "Normal Triangle";
        }
        return "Not a triangle";
    }

}

// let test = new TriangleClassifier(5, 5, 5);
// console.log(test.checkType());