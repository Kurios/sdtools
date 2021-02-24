import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Division } from 'src/sd-common/sd2-divisions';

@Component({
  selector: 'app-div-image',
  templateUrl: './div-image.component.html',
  styleUrls: ['./div-image.component.css']
})
export class DivImageComponent implements AfterViewInit {

  context?: CanvasRenderingContext2D;
  @ViewChild( 'myCanvas' ) canvas?: ElementRef;
  @Input() division: Division = {name:"ERR","rating":-1,"faction":"allied","type":"infantry","tags":[],"img":"assets/div/x.jpg"};
  @Input() size = 60;
  @Input() ban = true;
  @Output() selected:EventEmitter<Division> = new EventEmitter<Division>();

  constructor() { 
  }

  click():void {
    console.log("clicked " + this.division.name);
    this.selected.emit(this.division);
  }

  ngAfterViewInit(): void {
    if(this.canvas != undefined){
      const canvas = (this.canvas).nativeElement;
      this.context = canvas.getContext( '2d' );
      if(this.division != undefined){
        var image = new Image();
        image.src = this.division.img;
        image.addEventListener("load",()=>{
          
          if(this.ban && this.context && this.division.tags.includes("banned")){
            this.context.globalAlpha = .2;
            this.context.drawImage(image,0,0,this.size,this.size);
            this.context.globalAlpha = 1;
            this.context.strokeStyle = "darkred";
            this.context.beginPath();
            this.context.moveTo(0,0);
            this.context.lineTo(this.size,this.size);
            this.context.moveTo(this.size,0);
            this.context.lineTo(0,this.size);
            this.context.stroke();
          }else{
            this.context?.drawImage(image,0,0,this.size,this.size);
          }
        })
        ;
      }
    }
  }
}
