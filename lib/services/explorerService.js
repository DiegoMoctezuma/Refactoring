class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInNode = explorersInMission.map(
            (explorer) => explorer.githubUsername
        );
        return usernamesInNode;
    }

    static getExplorersNamesByMission(explorers, mission) {
        const explorersNames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const explorersMission = explorersNames.map(
            (explorers) => explorers.name
        );
        return explorersMission
    }
}

module.exports = ExplorerService;
