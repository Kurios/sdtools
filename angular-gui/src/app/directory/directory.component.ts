import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generateRandomId(length:number=6){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ret = '';
    for(let i = 0; i < length; i++){
      ret += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ret;
  }

}
