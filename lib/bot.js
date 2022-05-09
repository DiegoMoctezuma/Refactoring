const { ExplorerController, bot } = require("./controllers/explorerController");

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
	const message = `
	*Bienvenid@ al Bot LaunchX*

	*Funciones:*

	Ingrese cualquier número y le devolverá:
	- "FIZZ" si es divisible entre 3
	- "BUZZ" si es divisible entre 5
	- "FIZZBUZZ" si es divisible entre 3 y 5
	- Si no es divisible le regresará el mismo número 

	Ingrese "Java" o "Node" para saber los nombres de los explorers en la opción seleccionada

	*Comandos:*
	/start - Iniciar el bot
	/help - Ayuda
	/credits - Creador del Bot
	`;
	bot.sendMessage(msg.chat.id, message, {
		parse_mode: "Markdown",
	});
});

bot.onText(/\/help/, (msg) => {
	const message = `
	*Bot LaunchX*

	Ingrese cualquier número y le devolverá:
	- "FIZZ" si es divisible entre 3
	- "BUZZ" si es divisible entre 5
	- "FIZZBUZZ" si es divisible entre 3 y 5
	- Si no es divisible le regresará el mismo número 

	Ingrese "Java" o "Node" para saber los nombres de los explorers en la opción seleccionada
	`;
	bot.sendMessage(msg.chat.id, message, {
		parse_mode: "Markdown",
	});
});

bot.onText(/\/credits/, (msg) => {
	const message = "Bot LaunchX";
	bot.sendMessage(msg.chat.id, message, {
		reply_markup: {
			inline_keyboard: [
				[{text: "GitHub", url: "https://github.com/DiegoMoctezuma"}]
			],
		},
	});
});

bot.on("message", (msg) => {

	if (!isNaN(msg.text)) {
		
		const fizzbuzz = ExplorerController.getBotValidation(msg);
		bot.sendMessage(msg.chat.id , fizzbuzz);

	} else if (msg.text.toString().toLowerCase() === "java" || msg.text.toString().toLowerCase() === "node") {
		
		const nameExplorers = ExplorerController.getBotNameExplorers(msg);
		bot.sendMessage(msg.chat.id ,nameExplorers);

	}
});

