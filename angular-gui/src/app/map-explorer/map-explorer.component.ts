import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maps, Map } from 'src/sd-common/sd2-maps';

@Component({
  selector: 'app-map-explorer',
  templateUrl: './map-explorer.component.html',
  styleUrls: ['./map-explorer.component.css']
})
export class MapExplorerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.mapObject = new Maps();
    this.maps = this.mapObject.maplist;
    

  }

  getDesc(tag:string){
    return this.mapObject.tags.find((x)=>{return x.name == tag})?.desc;
  }

  setMap(map:Map){
    this.selected = map;
    window.history.replaceState(window.location.origin + "/maps?map=" + encodeURI(map.name),"Map Viewer: map.name");
    this.shareURL = window.location.origin + "/maps?map=" + encodeURI(map.name);
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
  shareURL = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selected = this.maps.find((x)=>{return x.name ==params.map});
    })
  }

}
