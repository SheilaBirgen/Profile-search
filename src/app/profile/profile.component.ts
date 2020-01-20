import { Component, OnInit } from '@angular/core';
import{ ProfileService} from '../service/profile.service';
import { Users } from '../users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  users:Users;
  userName:string;

  constructor(private profileService: ProfileService) {
   }
    getProfile() {
    //  this.profileService.getuserName(this.userName);
     this.profileService.getUser;
         
  }

  searchUsers(){
    console.log("rtyuiojuhygtfghjkojhgfjk")
  }

  ngOnInit() {
    this.profileService.getUser();
    this.users= this.profileService.Users;
    const options = {
      strings:['Enter your name '],
    };
  } 

}
