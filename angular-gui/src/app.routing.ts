import { Routes, RouterModule } from '@angular/router';
import { ChatHistoryComponent } from './app/chat-history/chat-history.component';
import { TierlistComponent } from './app/tierlist/tierlist.component';



const routes: Routes = [
    { path: '', component: ChatHistoryComponent },
    { path: 'tierlist', component: TierlistComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);