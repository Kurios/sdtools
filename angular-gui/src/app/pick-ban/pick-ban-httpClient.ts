import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PickBanHttpClient {

    constructor(private http: HttpClient) { }
    domain:String = "http://localhost:3000/apiv1/"
    getUserName(){
        return this.http.get(this.domain+"userName") as Observable<{username:string}>;
    }
    setUserName(username:string){
        console.log("send " + username);
        return this.http.post(this.domain+"userName", {'username':username}).subscribe();
    }
    pollServer(game:string){
        return this.http.get(this.domain+"poll/"+game);
    }
    postServer(o:Object,game:string){
        return this.http.post(this.domain+"poll/"+game,o);
    }
}