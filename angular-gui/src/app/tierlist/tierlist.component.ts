import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import {Divisions} from '../../sd-common/sd2-divisions'
@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.css']
})
export class TierlistComponent implements OnInit {

  divisions:Divisions;

  constructor() { 
    this.divisions = new Divisions();
    this.divisions.divisions.sort((a)=>{return a.rating});
  }

  getDivs(tier:number){
    if(tier == 0){
      return _.filter(this.divisions.divisions, (x)=>{return x.tags.includes("uber")});
    }
    if(tier == 1){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 3.5});
    }else if(tier == 2){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 3 && x.rating < 3.5});
    }else if(tier == 3){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 2.5 && x.rating < 3});
    }else if(tier == 4){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 2 && x.rating < 2.5});
    }else if(tier == 5){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating < 2});
    }
    return [];
  }

  banStyle(div:{tags:string[]}){
    if(div.tags.includes("uber")){
      return "opacity: 0.2;background-color:darkred"
    }
    else return "";
  }
  ngOnInit(): void {
  }

}
