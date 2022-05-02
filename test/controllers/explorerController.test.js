/* eslint-disable no-undef */
const ExplorerController = require("../../lib/controllers/explorerController");

describe("Pruebas de ExplorerController", () => {
    test("1. Obteniendo Explorers por Misión", () => {
        const prueba1 = ExplorerController.getExplorersByMission("node");
        expect(prueba1[8].mission).toBe("node");
    });
    test("2. Obteniendo Usernames de los explorers", () => {
        const prueba2 = ExplorerController.getExplorersUsernamesByMission("node");
        expect(prueba2).toEqual(expect.arrayContaining(["ajolonauta1","ajolonauta2"])); 
    });
    test("3. Obteniendo numero de Explorers por misión", () => {
        const prueba3 = ExplorerController.getExplorersAmonutByMission("node");
        expect(prueba3).toBe(10);
    });
    test("4. Obteniendo fizzbuzz de un número", () => {
        const numero1 = ExplorerController.applyValidationInNumber(15);
        expect(numero1).toBe("FIZZBUZZ");

        const numero2 = ExplorerController.applyValidationInNumber(10);
        expect(numero2).toBe("BUZZ");

        const numero3 = ExplorerController.applyValidationInNumber(9);
        expect(numero3).toBe("FIZZ");

        const numero4 = ExplorerController.applyValidationInNumber(1);
        expect(numero4).toBe(1);
    });
    test("5. Filtrando explorers por stack", () => {
        const stacksExplorers = ExplorerController.getSatckExplorers("javascript");
        expect(stacksExplorers[10].stacks[0]).toBe("javascript");
    });
});