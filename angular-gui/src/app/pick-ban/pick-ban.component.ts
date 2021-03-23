import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BaseMessage } from "../message/message";
import {PickBanHttpClient} from "./pick-ban-httpClient";

@Component({
  selector: 'app-pick-ban',
  templateUrl: './pick-ban.component.html',
  styleUrls: ['./pick-ban.component.css']
})
export class PickBanComponent implements OnInit {

  chatId$?: Observable<String>;
  chatId: String = "";

  messages: BaseMessage[] = [];
  username?: string;

  client :PickBanHttpClient;


  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private httpClient: HttpClient) {
      this.client = new PickBanHttpClient(httpClient);
    }

  ngOnInit(): void {
    //this.chatId = String(JSON.stringify(this.route.paramMap.sub))
    const chatId$ = this.route.paramMap.subscribe((x:ParamMap)=>{
      this.chatId = String(x.get("id"));
      this.client.getUserName().subscribe((x:{username:string})=>{
        console.log(JSON.stringify(x));
        this.username = x.username;
        let message = new BaseMessage();
        message.inputBoxText = this.username;
        message.text = this.username;
        message.content = "Welcome. Please verify your name:";
        message.hasStringInput = true;
        message.event = (x:BaseMessage) => {
          console.log("EVENT!" + x.text);
          if(x.text){
            this.client.setUserName(x.text);
          }
        }
        this.messages.push(message)
      })
    }
    )
  }

}
