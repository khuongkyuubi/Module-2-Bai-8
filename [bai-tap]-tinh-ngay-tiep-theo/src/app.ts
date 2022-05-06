export class NextDayCalculator {
    public day: number;
    public month: number;
    public year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    isLeapYear(): boolean {
        if (this.year % 400 === 0) {
            return true;
        } else {
            if (this.year % 4 === 0 && this.year % 100 !== 0) {
                return true;
            }
        }
        return false;
    }

    isLastDayOfMonth(): boolean {
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
                        return true
                } else {
                    if (this.day === 28) {
                        return true
                    }
                }
        }
        return false;
    }

    isLastMonthOfYear(): boolean {
        return this.month === 12;
    }

    getNextDay(): NextDayCalculator {
        let day: number;
        let month: number = this.month;
        let year: number = this.year;
        if (this.isLastDayOfMonth()) {
            day = 1;
            if (this.isLastMonthOfYear()) {
                month = 1;
                year = ++this.year;
            } else {
                month = ++this.month;
            }
        } else {
            day = ++this.day;

        }
        return new NextDayCalculator(day, month, year);
    }
}

// let test = new NextDayCalculator(29,2,2020);
//
// // @ts-ignore
// console.log(test.getNextDay());