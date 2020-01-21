// import { Injectable } from '@angular/core';
// import{HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Users } from '../users';
// import { Repository } from '../repository';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   user:Users;
//   repo:Repository;
//   private userName:string;
  

// apiKey:string = environment.apiKey;
// baseUrl: string = environment.baseUrl;
//   getuserName: any;
 
//   constructor( private http:HttpClient) { 
//     this.user = new Users("","","","",0,"","","",new Date());
//     this.userName = 'SheilaBirgen';
//   }
//   getUser(){
//     interface ApiResponse{
//       login:string;
//       avatar_url: any;
//       html_url:string;
//       bio:string;
//       repos: number;
//       followers:number;
//       following:number;
//     }
//     const promise = new Promise(((resolve, reject) => {
//       this.http.get<ApiResponse>('https://github.com/users/' + this.userName + '?access_token=' + this.apiKey)
//       .toPromise()
//       .then(res =>{
//         this.user.login = res.login;
//         this.user.avatar_url = res.avatar_url;
//         this.user.html_url = res.html_url;
//         this.user.repos = res.repos;
//         this.user.followers = res.followers;
//         this.user.following = res.following;
//       },
//       error => {
//           // reject(error);
//       });
//     }));
//     return promise;
//   }

//   getRepos(username:any) {

//     interface ApiResponse {
//       name: string;
//       html_url: string;
//       description: string;
//     }

//     const promise = new Promise(((resolve, reject) => {
//       this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + this.apiKey )
//         .toPromise()
//         .then(res => {
//           this.repo = res;
//     }, error => {

//       reject(error);
//     });
//   }));
//     return promise;
//   }
//   getUsername(username:string){
//     this.userName = username;
//   }


// }

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private username = "SheilaBirgen";
  private client_id = "6e3851f31ccf37f67ba7";
  private client_secret = "f0c139288bc0270dc4699745cfce81d719ea0046";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}