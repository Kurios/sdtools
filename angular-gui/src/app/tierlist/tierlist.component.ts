
import { ApplicationRef, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'underscore';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Division, Divisions} from '../../../../sd-common/sd2-divisions'
@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.css']
})
export class TierlistComponent implements OnInit {

  divisions:Divisions;
  @Input() selected?:Division;

  constructor(private cdr: ChangeDetectorRef) { 
    this.divisions = new Divisions();
    this.divisions.divisions.sort((a)=>{return a.rating});
    this.banSuggustions = this.suggustBan(3);
  }

  getDivs(tier:number){
    if(tier == 0){
      return _.filter(this.divisions.divisions, (x)=>{return x.tags.includes("banned")});
    }
    if(tier == 1){
      return _.filter(this.divisions.divisions,(x)=>{return  x.rating < 5 && x.rating >= 4 && ! x.tags.includes("banned")});
    }else if(tier == 2){
      return _.filter(this.divisions.divisions,(x)=>{return  x.rating < 4 && x.rating >= 3.5&& ! x.tags.includes("banned")});
    }else if(tier == 3){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 3 && x.rating < 3.5&& ! x.tags.includes("banned")});
    }else if(tier == 4){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 2.5 && x.rating < 3&& ! x.tags.includes("banned")});
    }else if(tier == 5){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating >= 2 && x.rating < 2.5&& ! x.tags.includes("banned")});
    }else if(tier == 6){
      return _.filter(this.divisions.divisions,(x)=>{return x.rating < 2});
    }
    return [];
  }

  banSuggustions?:Division[];

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term == '' ? [] : this.divisions.divisions.filter(v => v.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1).slice(0,10)))

  formatter = (x: {name: string}) => x.name;
  
  suggustBan(count:number){
    let ret = [];
    for(let div of this.divisions.divisions){
      if(ret.length == count) return ret;
      if(!div.tags.includes("banned") && div.tags.includes("uber")){
        ret.push(div);
      }
    }

    for(let div of this.divisions.divisions){
      if(ret.length == count) return ret;
      if(!div.tags.includes("banned") && !div.tags.includes("uber")){
        ret.push(div);
      }
    }
    return ret;
  }

  onSelect(div:Division){
    this.selected = div;
  }

  isBanned(div?:Division){
    if(div)
      return div.tags.includes("banned")
    return false;
  }

  toggleBan(div:Division){
    if(this.isBanned(div)){
      div.tags = div.tags.filter((x)=>{x != "banned"});
    }else{
      div.tags.push("banned");
    }
    this.cdr.detectChanges();
    this.banSuggustions = this.suggustBan(3);
  }

  explainType(t:string){
    return _.find(this.divisions.tags,(x)=>{return t == x.name})?.desc;
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
