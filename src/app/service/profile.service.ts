import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private username :"SheilaBirgen";
private clientid :"af2302f043d2de7db149";
private clientsecret: "a61656dcba579721b7c11847c0c8007b88511152"; 

  constructor( private http:HttpClient) { 
      
    console.log(  "service is ready!" )
    this.username
    ='SheilaBirgen';
  }
  getProfileInfo(){
return this.http.get("http://api.github.com/users/" +this.username +"/repos?client_id=" +this.clientid + 
"&client_secret=" +this.clientsecret);
  }
}
