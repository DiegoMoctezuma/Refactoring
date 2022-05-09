const ExplorerService = require("../services/explorerService");
const FizzbuzzService = require("../services/fizzbuzzService");
const Reader = require("../utils/reader");

require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

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
    static getBotValidation(msg) {
        const numberToApplyFb = parseInt(msg.text);

        if (!isNaN(numberToApplyFb)) {
            const fizzbuzzTrick =
				ExplorerController.applyValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        }
    }
    static getBotNameExplorers(msg) {
        const explorers = Reader.readJsonFile("explorers.json");
        const Botexplorers = ExplorerService.getExplorersNamesByMission(explorers, msg.text);
        const sendExplorers = `Nombres de los explorers en "${msg.text}": ${Botexplorers.join(",")}`;
        return sendExplorers;
    }
}

module.exports = { ExplorerController, bot };
