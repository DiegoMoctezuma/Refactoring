const ExplorerService = require("../services/explorerService");
const FizzbuzzService = require("../services/fizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static applyValidationInNumber(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
    static getSatckExplorers(stack) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getSatckExplorers(explorers, stack);
    }
}

module.exports = ExplorerController;