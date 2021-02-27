import { Component, OnInit } from '@angular/core';
import { Maps, Map } from 'src/sd-common/sd2-maps';

@Component({
  selector: 'app-map-explorer',
  templateUrl: './map-explorer.component.html',
  styleUrls: ['./map-explorer.component.css']
})
export class MapExplorerComponent implements OnInit {

  constructor() { 
    this.mapObject = new Maps();
    this.maps = this.mapObject.maplist;
  }

  getDesc(tag:string){
    return this.mapObject.tags.find((x)=>{return x.name == tag})?.desc;
  }

  setMap(map:Map){
    this.selected = map;
  }

  checkVersion(url:string){
    if(this.newMap){
      return url.replace(".jpg",".png");
    }else{
      return url;
    }
  }

  mapObject:Maps;
  maps:Map[];
  selected?:Map;
  newMap = true;

  ngOnInit(): void {
  }

}
