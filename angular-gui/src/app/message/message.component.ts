import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as _ from 'underscore';
import { BaseMessage } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})


export class MessageComponent implements OnInit {

  @Input() @Output() message: BaseMessage = new BaseMessage();
  

  constructor() {
   }

  ngOnInit(): void {
  }

  banSubmit() {
    console.log(JSON.stringify(this.message.banValues))
    if(this.canBan()) this.message.banSubmit = true;
  }

  canBan():boolean{
    console.log("checking for click");
    if(_.select(this.message.banValues,(a)=>{return a.selected == true}).length == this.message.banCount) return true;
    return false;
  }

  textboxFocusChange() {
    console.log(JSON.stringify(this.message));
    if(this.message.event)
      this.message.event(this.message);
  }

}
