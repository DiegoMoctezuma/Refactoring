const FizzbuzzService = require("../../lib/services/fizzbuzzService");

describe("Prueba FizzBuzzService", () => {
    test("Añadiendo FizzBuzz a los explorers", () => {
        const explorer1 = {name: "Explorer1", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(explorer1).toEqual(expect.objectContaining({trick: "FIZZBUZZ"}));
    });
});
