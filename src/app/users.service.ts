import { Injectable } from '@angular/core';
import{Http, Headers } from '@angular/http';
import 'rjx/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

private username :string;
private clientid :"af2302f043d2de7db149";
private clientsecret: "0b8a1734e15335b7f2e88f2e9ade1e4c48069254"; 

  constructor( private http:Http) { 
      
    console.log(  "service is ready!" )
    this.username
    + 'SheilaBirgen';
  }
  getuserInfor(){
return this.http.get("http://api.github.com/users/" +this.username +"?client_id=" +this.clientid + "?client_secret=" +this.clientsecret
  }
  
  
}