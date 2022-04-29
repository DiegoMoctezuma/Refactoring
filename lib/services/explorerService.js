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
}

module.exports = ExplorerService;
