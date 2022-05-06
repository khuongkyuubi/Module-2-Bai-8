export class FizzBuzzTranslate {
    public number: number;

    constructor(number: number) {
        this.number = number;
    }

    translate(): string {
        if (this.number % 15 === 0) {
            return "FizzBuzz";
        }
        if (this.number % 5 === 0) {
            return "Buzz";
        }
        if (this.number % 3 === 0) {
            return "Fizz";
        }
        return "Hello"
    }

}
