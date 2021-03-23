import {Division} from "../sd-common/sd2-divisions"
import {SDMap, Maps} from "../sd-common/sd2-maps"
import * as _ from 'underscore'
import { Game, Player } from "./game";

export class pickBanModel{
    //So an instance of this model represents one isntance.

    //current state of the pick ban system....
    state:number = 0;

    game:Game;

    constructor(private chatInstance:ChatInstance){
        this.pickState = this.SD2LeagueFormat;
    }

    doState(){
        //State 0. Nothing has happened.
        //1: Player A joins
        //2: Player B Joins
        //3: "Coinflip", A and B is assigned to P1 and P2.
        //4: P1 Bans 3 maps.
        //5: P2 Bans 3 maps.
        //6: Map is picked at random from remainder
        if(this.chatInstance.hasMessage(this.game.gameId))
        if(this.pickState.length <= this.state){
            this.pickState[this.state].perform(this.game,null)
            if(this.pickState[this.state].state == States.FINISHED){
                this.state ++;
            }
        }

    }

    pickState:stateEngine[];

    SD2LeagueFormat:stateEngine[]= [
        new Init(),
        new Coinflip(this.chatInstance),
        new FixedMapPool(),
        //MapBan(3,1),
        //MapBan(3,2),
        new selectMapRandom(this.chatInstance),
        // createDivisonPool(), //default is all
        // DivisionBan(2,2),
        // DivisionBan(3,1),
        // DivisionBan(3,2),
        // DivisionBan(2,1),
        // FactionPick(2),
        // FactionPick(1),
        // DivisionPick(1),
        // DivisionPick(2),
        // IncomePick(2),
        // IncomePick(1)
        // Summary()
    ]
}

export enum States {
    NOT_STARTED, WAITING_FOR_INPUT, FINISHED
}

export interface stateEngine{
    state:States;
    perform(game:Game, args:any):boolean;
}

export class Init implements stateEngine {
    state = States.NOT_STARTED;

    perform(g:Game){
        return false;
    }
}

export class FixedMapPool implements stateEngine {
    state = States.NOT_STARTED;

    perform(g:Game){
        var m = new Maps();
        g.mapPool = m.maplist;
        this.state = States.FINISHED;

        return true;
    }
}


export class ChatInstance {

    hasMessage(gameId:string){
        return false;
    }

    getMessage(gameId:string){
        return "";
    }
    
    /**
     * 
     * @param message message to send;
     * @param player (Optional) send message only to target player;
     */
    queueMessage(message:string,player?:Player){
        
    }
}

export class Coinflip implements stateEngine {
    state = States.NOT_STARTED;
    prompt?:Player;
    noprompt?:Player;

    constructor(private instance:ChatInstance){
        
    }
    perform(g:Game, input:any){
        if(!prompt){
            let x = Math.random();
            if(x > .5){
                this.prompt = g.playerA;
                this.noprompt = g.playerB;
            }else{
                this.prompt = g.playerB;
                this.noprompt = g.playerA;
            }
            //send a prompt to prompt player
            return true;
        }else{
            if(input && input.player && input.player == prompt ){
                if(input.message="player1"){
                    g.player1 = this.prompt;
                    g.player2 = this.noprompt;
                    this.state = States.FINISHED;
                }else if(input.message="player2"){
                    g.player1 = this.noprompt;
                    g.player2 = this.prompt;
                    this.state = States.FINISHED;
                }
            }
            //send message explaining this to players.
        }
    }
}

export class CreateMapPool implements stateEngine {
    state = States.NOT_STARTED;
    maps = new Maps();

    perform(game:Game){
        if(this.state == States.NOT_STARTED){
            game.mapPool = this.maps.maplist;
            return true;
        }else{
            return false;
        }
    }
}

export class selectMapRandom implements stateEngine {
    state = States.NOT_STARTED;

    constructor(private chatInstance:ChatInstance){

    }

    perform(game:Game){
        if(this.state == States.NOT_STARTED){
            game.map = _.sample(game.mapPool);
            this.chatInstance.queueMessage(JSON.stringify({action:"selectMap",map:game.map}));
            return true;
        }else{
            return false;
        }
    }
}