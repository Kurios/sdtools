import { Routes, RouterModule } from '@angular/router';
import { ChatHistoryComponent } from './app/chat-history/chat-history.component';
import { DirectoryComponent } from './app/directory/directory.component';
import { MapExplorerComponent } from './app/map-explorer/map-explorer.component';
import { TierlistComponent } from './app/tierlist/tierlist.component';



const routes: Routes = [
    { path: '', component: DirectoryComponent},
    { path: 'chat', component: ChatHistoryComponent },
    { path: 'tierlist', component: TierlistComponent },
    { path: 'maps', component: MapExplorerComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);