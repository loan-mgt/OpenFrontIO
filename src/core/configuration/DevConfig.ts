import { GameType, Player, PlayerInfo, UnitInfo, UnitType } from "../game/Game";
import { GameConfig } from "../Schemas";
import { ServerConfig } from "./Config";
import { DefaultConfig, DefaultServerConfig } from "./DefaultConfig";

export class DevServerConfig extends DefaultServerConfig {
    gameCreationRate(): number {
        return 10 * 1000
    }
    lobbyLifetime(): number {
        return 10 * 1000
    }
}

export class DevConfig extends DefaultConfig {

    constructor(sc: ServerConfig, gc: GameConfig) {
        super(sc, gc);
    }

    numSpawnPhaseTurns(): number {
        return this.gameConfig().gameType == GameType.Singleplayer ? 40 : 200
        // return 100
    }

    unitInfo(type: UnitType): UnitInfo {
        const info = super.unitInfo(type)
        const oldCost = info.cost
        info.cost = (p: Player) => oldCost(p) / 10
        return info
    }

    // populationIncreaseRate(player: Player): number {
    //     return this.maxPopulation(player)
    // }



    // tradeShipSpawnRate(): number { //     return 10
    // }
    // boatMaxDistance(): number {
    //     return 5000
    // }

    // numBots(): number {
    //     return 0
    // }
    // spawnNPCs(): boolean {
    //     return false
    // }

}
