import {TriangleClassifier} from "../app";


describe('Triangle Testing',  () => {


    // let day: TriangleClassifier = new TriangleClassifier(5,5,5);
    //  test('return type of triangle', () => {
    //     expect(day.checkType()).toBe("Equilateral Triangle");
    // });
    //
    // let day2: TriangleClassifier = new TriangleClassifier(5,5,3);
    // test('return type of triangle', () => {
    //     expect(day2.checkType()).toBe("Isosceles Triangle");
    // });

    test("test triangle", () => {
        expect((new TriangleClassifier(2,2,2)).checkType()).toBe("Equilateral Triangle");
        expect((new TriangleClassifier(2,2,3)).checkType()).toBe("Isosceles Triangle");
        expect((new TriangleClassifier(3,4,5)).checkType()).toBe("Normal Triangle");
        expect((new TriangleClassifier(8,2,3)).checkType()).toBe("Not a triangle");
        expect((new TriangleClassifier(-1,2,1)).checkType()).toBe("Not a triangle");
        expect((new TriangleClassifier(0,1,1)).checkType()).toBe("Not a triangle");
    })

    // day.setSide(5,5,3);
    // test('return type of triangle', () => {
    //     expect(day.checkType()).toBe("Isosceles Triangle");
    // });
    //
    // day.setSide(5,4,3);
    // test('return type of triangle', () => {
    //     expect(day.checkType()).toBe("Normal Triangle");
    // });
    //
    // day.setSide(5,10,3);
    // test('return type of triangle', () => {
    //     expect(day.checkType()).toBe("Not a triangle");
    // });

});
