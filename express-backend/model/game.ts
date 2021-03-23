import {Division} from "../sd-common/sd2-divisions"
import {SDMap, Maps} from "../sd-common/sd2-maps"

export class Game{

    static games  = new Map<string,Game>();

    mapPool:SDMap[] = [];
    map?:SDMap;
    divisionPool:Division[] = [];
    playerA?:Player;
    playerB?:Player;
    player1?:Player;
    player2?:Player;
    gameId:string;

    public static find(gameId:string){
        let ret:Game = Game.games[gameId]
        if(ret){
            return ret;
        }
        ret = new Game();
        ret.gameId = gameId;
        Game.games[gameId] = ret;
        return ret;
        
    }
}

export class Player{

}