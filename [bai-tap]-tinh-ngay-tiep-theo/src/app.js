"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextDayCalculator = void 0;
var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    NextDayCalculator.prototype.isLeapYear = function () {
        return true;
    };
    NextDayCalculator.prototype.isLastDayOfMonth = function () {
        switch (this.month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (this.day === 31) {
                    return true;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (this.day === 30) {
                    return true;
                }
                break;
            case 2:
                if (this.isLeapYear()) {
                    if (this.day === 29)
                        return true;
                }
                else {
                    if (this.day === 28) {
                        return true;
                    }
                }
        }
        return false;
    };
    NextDayCalculator.prototype.isLastMonthOfYear = function () {
        return this.month === 12;
    };
    NextDayCalculator.prototype.getNextDay = function () {
        var day;
        var month = this.month;
        var year = this.year;
        if (this.isLastDayOfMonth()) {
            day = 1;
            if (this.isLastMonthOfYear()) {
                month = 1;
                year = ++this.year;
            }
            else {
                month = ++this.month;
            }
        }
        else {
            day = ++this.day;
        }
        return new NextDayCalculator(day, month, year);
    };
    return NextDayCalculator;
}());
exports.NextDayCalculator = NextDayCalculator;
// let test = new NextDayCalculator(29,2,2020);
//
// // @ts-ignore
// console.log(test.getNextDay());
