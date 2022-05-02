/* eslint-disable no-undef */
const ExplorerService = require("../../lib/services/explorerService");
const Reader = require("../../lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Prueba explorerService", () => {
    test("1. Filtro de explorers por misión", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNode[6].mission).toBe("node");
    });

    test("2. Número de explorers por misión", () => {
        const amount = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "node"
        );

        expect(amount).toBe(10);
    });

    test("3. Usuarios de los explorers por misión", () => {
        const users = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );

        expect(users[7]).toBe("ajolonauta13");
    });

    test("4. Filtro de los explorers por stacks", () => {
        const stacksexplorer = ExplorerService.getSatckExplorers(explorers,"javascript");

        expect(stacksexplorer[10].stacks[0]).toBe("javascript");
    });
});
