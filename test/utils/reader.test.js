const Reader = require("../../lib/utils/reader");

describe("Return readJsonFile", () => {
    test("Reader", () => {
        const explorers = Reader.readJsonFile("explorers.json");

        expect(explorers[0].name).toBe("Woopa1");
    });
});
