import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private username :"SheilaBirgen";
private clientid :"af2302f043d2de7db149";
private clientsecret: "0b8a1734e15335b7f2e88f2e9ade1e4c48069254"; 

  constructor( private http:HttpClient) { 
      
    console.log(  "service is ready!" )
    this.username
    ='SheilaBirgen';
  }
  getProfileInfo(){
return this.http.get("http://api.github.com/users/" +this.username +"?client_id=" +this.clientid + 
"&client_secret=" +this.clientsecret);
  }
}
