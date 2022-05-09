const { ExplorerController, bot } = require("./controllers/explorerController");

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    ExplorerController.getBotValidation(msg);
});
