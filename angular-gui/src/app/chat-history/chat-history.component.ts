import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewEncapsulation, ɵɵclassMapInterpolate1 } from '@angular/core';
import { interval } from 'rxjs';
import { BaseMessage } from "../message/message";
import * as _ from "underscore";

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
  encapsulation: ViewEncapsulation.None
  //styles: ['.card.disabled { opacity: 0.5; }']
})
export class ChatHistoryComponent implements OnInit {
  disabled = false;

  coin = { 'winner':'you',
            'pick': 0,
            'first': false,
            'second': false
  };

  messages : BaseMessage[] = [];

  constructor() {
    var m1 = new BaseMessage();
    m1.content = "Welcome " + this.username;
    this.messages.push(m1);
    this.dialogState ++;
    let timer = interval(3000);
    timer.subscribe(()=>{this.fakeDialog();});
  }

  dialogState = 0;
  username = "you";
  coinflip : BaseMessage = new BaseMessage();
  mapBan: BaseMessage = new BaseMessage();
  divBan1: BaseMessage = new BaseMessage();
  divBan2: BaseMessage = new BaseMessage();
  factionPick: BaseMessage = new BaseMessage();
  DivisionPick: BaseMessage = new BaseMessage();
  IncomePick: BaseMessage = new BaseMessage();
  botDivision: string = "";
  botIncome: string = "";
  map: string = "";
  mapPool = ["Bobr", "Slusk", "Krupa"];
  divisionPool = ["-1 Panzer","21 Panzer", "22 Panzer", "23 Panzer", "24 Panzer", "25 Panzer", "Russian Panzer", "American Panzer", "Waifu Panzer", "Hitler's Panzer", "Eva Braun Panzer", "Skypanzer", "1st Panzer", "12th Panzer", "Panzerfaust", "Bombepanzer", "Schrödinger's Panzer"];
  fakeDialog(){
    console.log("Bot is checking messages for "+ this.username)
    switch (this.dialogState){
      case 0:
        var m1 = new BaseMessage();
        m1.content = "Welcome " + this.username;
        this.messages.push(m1);
        this.dialogState ++;
        break;
      case 1:
        var m1 = new BaseMessage();
        m1.content = "DummyBot has joined";
        this.messages.push(m1);
        this.dialogState ++;
        break;
      case 2:
        var m1 = new BaseMessage();
        m1.content = "You have won the coinflip Please select if you will pick your division first or second.";
        this.messages.push(m1);
        this.coinflip ;
        this.coinflip.addRadioItem("first");
        this.coinflip.addRadioItem("second");
        this.messages.push(this.coinflip);
        this.dialogState ++;
        break;
      case 3:
        if(this.coinflip.radioValue != ""){
          var m1 = new BaseMessage();
          this.coinflip.lock = true;
          let maps = "";
          for (let m of this.mapPool){ maps += " " + m}
          m1.content = "3 maps have been put into the map pool:" + maps;
          this.messages.push(m1);
          this.dialogState ++;
        }
        break;
      case 4:
        if(this.coinflip.radioValue == "second"){
          var m1 = new BaseMessage();
          this.coinflip.lock = true;
          let z = _.sample(this.mapPool);
          this.mapPool = _.without(this.mapPool,z as string);
          m1.content = "Dummybot has banned " + z;
          this.messages.push(m1);
        } else if(this.coinflip?.radioValue == "first"){
        }else{
          break;
        }
        this.dialogState ++;
        break;
      case 5:
        this.mapBan.content = "Please select a map to ban";
        for(let z of this.mapPool){
          this.mapBan.addRadioItem(z);
        }
        this.messages.push(this.mapBan);
        this.dialogState ++;
        break;
      case 6:
          if(this.mapBan.radioValue != ""){
            this.mapPool = _.without(this.mapPool,this.mapBan.radioValue);
            this.mapBan.lock = true;
            if(this.coinflip.radioValue == "first"){
              var m1 = new BaseMessage();
              this.coinflip.lock = true;
              let z = _.sample(this.mapPool);
              this.mapPool = _.without(this.mapPool,z as string);
              m1.content = "Dummybot has banned " + z;
              this.messages.push(m1);
            } else if(this.coinflip?.radioValue == "second"){
            }else{
              break;
            }
            this.dialogState ++;
          }
          break;
      case 7:
        if(this.mapBan.radioValue != ""){
          var m1 = new BaseMessage();
          this.map = _.sample(this.mapPool) as string;
          m1.content =(this.map + " has been selected");
          this.messages.push(m1);
          this.dialogState ++;
        }
        break;
      //Division Banning

      //player 2 bans 2.
      case 8:
        if(this.coinflip.radioValue == "second"){
          this.divBan1.content = "Please pick 2 divisions to ban";
          for(let d of this.divisionPool){
            this.divBan1.addBanPickItem(d);
          }
          this.divBan1.setBanCount(2);
          this.messages.push(this.divBan1);
        }else if(this.coinflip.radioValue == "first"){
          var m1 = new BaseMessage();
          let z = _.sample(this.divisionPool);
          this.divisionPool = _.without(this.divisionPool,z as string);
          m1.content = "Dummybot has banned " + z;
          this.messages.push(m1);

          var m1 = new BaseMessage();
          z = _.sample(this.divisionPool);
          this.divisionPool = _.without(this.divisionPool,z as string);
          m1.content = "Dummybot has banned " + z;
          this.messages.push(m1);

          this.divBan1.content = "Please pick 3 divisions to ban";
          for(let d of this.divisionPool){
            this.divBan1.addBanPickItem(d);
          }
          this.divBan1.setBanCount(3);
          this.messages.push(this.divBan1);
        }
        this.dialogState ++;
        break;

        case 9:
        if(this.divBan1.banSubmit){
          this.divisionPool = this.purgeDivisions(this.divisionPool,this.divBan1.banValues);
          if(this.coinflip.radioValue == "first"){
            var m1 = new BaseMessage();
            let z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);
            var m1 = new BaseMessage();
            z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);
            var m1 = new BaseMessage();
            z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);

            this.divBan2.content = "Please pick 2 divisions to ban";
            for(let d of this.divisionPool){
              this.divBan2.addBanPickItem(d);
            }
            this.divBan2.setBanCount(2);
            this.messages.push(this.divBan2);
          }else if(this.coinflip.radioValue == "second"){
            var m1 = new BaseMessage();
            let z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);

            var m1 = new BaseMessage();
            z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);
            var m1 = new BaseMessage();
            z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);

            this.divBan2.content = "Please pick 3 divisions to ban";
            for(let d of this.divisionPool){
              this.divBan2.addBanPickItem(d);
            }
            this.divBan2.setBanCount(3);
            this.messages.push(this.divBan2);
          }
          this.dialogState ++;
        }
        break;

        case 10:
        if(this.divBan2.banSubmit){
          this.divisionPool = this.purgeDivisions(this.divisionPool,this.divBan2.banValues);
          if(this.coinflip.radioValue == "first"){

          }else if(this.coinflip.radioValue == "second"){
            var m1 = new BaseMessage();
            let z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);

            var m1 = new BaseMessage();
            z = _.sample(this.divisionPool);
            this.divisionPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has banned " + z;
            this.messages.push(m1);
          }
          this.dialogState ++;
        }
        break;

        case 11:
          if(this.coinflip.radioValue == "first"){
            this.DivisionPick.content = "Please pick your division";
            for(let d of this.divisionPool){
              this.DivisionPick.addRadioItem(d);
            }
            this.messages.push(this.DivisionPick);
          }else{
            var m1 = new BaseMessage();
            let z = _.sample(this.divisionPool);
            this.mapPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has picked " + z;
            this.botDivision = z as string;
          }
          this.dialogState ++;
        break;

        case 12:
          if(this.coinflip.radioValue == "first"){
            if(this.DivisionPick.radioValue == "") break;
            var m1 = new BaseMessage();
            let z = _.sample(this.divisionPool);
            this.mapPool = _.without(this.divisionPool,z as string);
            m1.content = "Dummybot has picked " + z;
            this.botDivision = z as string;
          }else{
            this.DivisionPick.content = "Please pick your division";
            for(let d of this.divisionPool){
              this.DivisionPick.addRadioItem(d);
            }
            this.messages.push(this.DivisionPick);
          }
          this.dialogState ++
        break;

        case 13:
          if(this.coinflip.radioValue == "second")
            if(this.DivisionPick.radioValue == "") break;
            
          var m1 = new BaseMessage();
          m1.content += " The map is " + this.map + " you are playing " + this.DivisionPick.radioValue + " and Dummybot will be playing " + this.botDivision;
          this.messages.push(m1);
          this.dialogState ++;
        break;

        case 14:
          break;



      default:
        console.log("we have no case for \""+this.dialogState+"\"")
    }
  }

  purgeDivisions(list:string[],selection:{name:string,selected:boolean}[]){
    for(let item of selection){
      if(item.selected) list = _.without(list,item.name);
    }
    return list;
  }

  ngOnInit(): void {
  }

}
