import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { TierlistComponent } from './tierlist/tierlist.component';
import { appRoutingModule } from 'src/app.routing';
import { DivImageComponent } from './div-image/div-image.component';
import { DirectoryComponent } from './directory/directory.component';
import { MapExplorerComponent } from './map-explorer/map-explorer.component';
import { PickBanComponent } from './pick-ban/pick-ban.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatHistoryComponent,
    MessageComponent,
    TierlistComponent,
    DivImageComponent,
    DirectoryComponent,
    MapExplorerComponent,
    PickBanComponent
  ],
  imports: [
    appRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
