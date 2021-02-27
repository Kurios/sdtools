import { send } from "process";
import {Division} from "../sd-common/sd2-divisions"
import {Map} from "../sd-common/sd2-maps"

export class pickBanModel{
    //So an instance of this model represents one isntance.

    //current state of the pick ban system....
    state:number = 0;

    game:Game;

    doState(){
        //State 0. Nothing has happened.

        //1: Player A joins
        //2: Player B Joins
        //3: "Coinflip", A and B is assigned to P1 and P2.
        //4: P1 Bans 3 maps.
        //5: P2 Bans 3 maps.
        //6: Map is picked at random from remainder

    }

    SD2LeagueFormat:stateEngine[]= [
        new Init(),
        new Coinflip(),
        fixedMapPool("league"),
        MapBan(3,1),
        MapBan(3,2),
        selectMapRandom(),
        createDivisonPool(), //default is all
        DivisionBan(2,2),
        DivisionBan(3,1),
        DivisionBan(3,2),
        DivisionBan(2,1),
        FactionPick(2),
        FactionPick(1),
        DivisionPick(1),
        DivisionPick(2),
        IncomePick(2),
        IncomePick(1)
        Summary()
    ]
}

export interface stateEngine{
    perform(game:Game, args:any):boolean;
}
export class Game{
    mapPool:Map[] = [];
    divisionPool:Division[] = [];
    playerA?:string;
    playerB?:string;
    player1?:string;
    player2?:string;
}

export class Init implements stateEngine {
    perform(g:Game){
        return false;
    }
}

export class Coinflip implements stateEngine {
    prompt?:string;
    perform(g:Game, ret:Return){
        if(!prompt){
            let x = Math.random();
            if(x > .5){
                this.prompt = g.playerA;
            }else{
                this.prompt = g.playerB;
            }
            //send a prompt to prompt player
            return true;
        }else{
            if(ret.player == prompt ){
                if(ret.message="player1"){
                    g.player1 = prompt;
                    g.player2 = !prompt;
                }else if(ret.message="player2"){

                }
            }
        }
    }
}