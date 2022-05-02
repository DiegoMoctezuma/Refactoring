/* eslint-disable no-undef */
const ExplorerController = require("../../lib/controllers/explorerController");

describe("Pruebas de ExplorerController", () => {
    test("1. Obteniendo Explorers po Misión", () => {
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
});