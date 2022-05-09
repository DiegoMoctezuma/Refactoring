const FizzbuzzService = require("../../lib/services/fizzbuzzService");

describe("Prueba FizzBuzzService", () => {
    test("1. Añadiendo FizzBuzz a los explorers", () => {
        const explorer1 = { name: "Explorer1", score: 15 };
        const explorerFizzBuzz =
			FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(explorerFizzBuzz).toEqual(
            expect.objectContaining({ trick: "FIZZBUZZ" })
        );
    });
    test("2. Probando FizzBuzz con un número", () => {
        const number1 = FizzbuzzService.applyValidationInNumber(15);
        expect(number1).toBe("FIZZBUZZ");

        const number2 = FizzbuzzService.applyValidationInNumber(5);
        expect(number2).toBe("BUZZ");

        const number3 = FizzbuzzService.applyValidationInNumber(3);
        expect(number3).toBe("FIZZ");
    });
});
