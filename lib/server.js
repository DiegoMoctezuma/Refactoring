const { ExplorerController } = require("./controllers/explorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmount =
		ExplorerController.getExplorersAmonutByMission(mission);

    res.json({
        mission: mission,
        quantity: explorersAmount,
    });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernames =
		ExplorerController.getExplorersUsernamesByMission(mission);

    res.json({
        mission: mission,
        explorers: explorersUsernames,
    });
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const fizzbuzz = ExplorerController.applyValidationInNumber(score);

    res.json({
        score: score,
        trick: fizzbuzz,
    });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
