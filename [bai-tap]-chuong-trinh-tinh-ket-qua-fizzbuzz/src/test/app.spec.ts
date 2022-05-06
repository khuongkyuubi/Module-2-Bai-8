import {FizzBuzzTranslate} from "../app";


describe(' FizzBuzz Translate Testing',  () => {
    test("FizzBuzz Triangle", () => {
        expect((new FizzBuzzTranslate(42)).translate()).toBe("Fizz");
        expect((new FizzBuzzTranslate(35)).translate()).toBe("Buzz");
        expect((new FizzBuzzTranslate(30)).translate()).toBe("FizzBuzz");
        expect((new FizzBuzzTranslate(31)).translate()).toBe("Hello");
    })
});
