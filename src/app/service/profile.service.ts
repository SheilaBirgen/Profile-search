import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../users';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
Users:Users;
private userName:string;

apiKey:string = environment.apiKey;
baseUrl: string = environment.baseUrl;
  getuserName: any;
 
  constructor( private http:HttpClient) { 
    this.Users = new Users("","","","",0,"","","",new Date());
    this.userName = 'SheilaBirgen';
  }
  getUser(){
    interface ApiResponse{
      login:string;
      avatar_url: any;
      html_url:string;
      bio:string;
      repos: number;
      followers:number;
      following:number;
    }
    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://github.com/users/' + this.userName + '?access_token=' + this.apiKey)
      .toPromise()
      .then(res =>{
        this.Users.login = res.login;
        this.Users.avatar_url = res.avatar_url;
        this.Users.html_url = res.html_url;
        this.Users.repos = res.repos;
        this.Users.followers = res.followers;
        this.Users.following = res.following;
      },
      error => {
          // reject(error);
      });
    }));
    return promise;
  }}