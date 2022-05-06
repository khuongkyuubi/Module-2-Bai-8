"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe('NextDayCalculator Testing', function () {
    var day = new app_1.NextDayCalculator(29, 2, 2020);
    test('should return an instance of a next day calc', function () {
        expect(day.getNextDay()).toEqual(new app_1.NextDayCalculator(1, 3, 2020));
    });
    var day2 = new app_1.NextDayCalculator(1, 1, 2018);
    test('should return an instance of a next day calc', function () {
        expect(day2.getNextDay()).toEqual(new app_1.NextDayCalculator(2, 1, 2018));
    });
});
