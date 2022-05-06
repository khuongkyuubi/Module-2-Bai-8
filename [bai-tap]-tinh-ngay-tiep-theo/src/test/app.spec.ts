import {NextDayCalculator} from "../app";


describe('NextDayCalculator Testing', () => {
    let day: NextDayCalculator = new NextDayCalculator(29,2,2020);

    test('should return an instance of a next day calc', () => {
        expect(day.getNextDay()).toEqual(new NextDayCalculator(1,3,2020));
    });

    let day2 : NextDayCalculator = new NextDayCalculator(1,1,2018);

    test('should return an instance of a next day calc', () => {
        expect(day2.getNextDay()).toEqual(new NextDayCalculator(2,1,2018));
    });

});
