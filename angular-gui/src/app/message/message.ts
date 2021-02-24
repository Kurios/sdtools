import { stringify } from "@angular/compiler/src/util";

/**
 * We have several types of messages:
 * 
 * "String Message" - a standard line of text presented to a user.
 * "Coinfip Picker" - a picker for "first/second" from a coinflip or for other radio-checkbox style selections.
 * "Map Picker" - a tool for picking maps
 * "Map Message" - A message consisting of a map name and a image of the map.
 * "Division Picker" - a tool for picking divisions
 * "results Message" - a formatted message for results.
 */
export class BaseMessage {
    content: string;
    hasMapPicker = false;
    hasString = false;
    hasRadio = false;
    radioValue : string = "";
    radioValues: string[] = [];
    hasBanPick = false;
    banValues : {"name":string, "selected": boolean}[] = [];
    banSubmit = false;
    banCount = 0;

    lock = false;


    constructor(){
        this.content = "";
    }

    addRadioItem(item:string){
        this.hasRadio = true;
        this.radioValues.push(item);
    }

    addBanPickItem(item:string){
        this.banValues.push({"name": item, "selected": false});
    }
    setBanCount(c:number){
        this.hasBanPick = true;
        this.banCount = c;
    }

}

