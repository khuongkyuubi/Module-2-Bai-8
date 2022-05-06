"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe("testFindAbsolute0", function () {
    test("testFindAbsolute0", function () {
        var number = 0;
        var expected = 0;
        expect(app_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsolute1", function () {
    test("testFindAbsolute1", function () {
        var number = 1;
        var expected = 1;
        expect(app_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsoluteNegative1", function () {
    test("testFindAbsoluteNegative1", function () {
        var number = -1;
        var expected = 1;
        expect(app_1.AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
