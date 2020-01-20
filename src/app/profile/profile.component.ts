import { Component, OnInit } from '@angular/core';
import{ ProfileService} from 'src/app/service/profile.service';
import { Users } from '../users';
import { Repository } from '../repository';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  searchUsers = true;

  user: Users;
  repo: Repository;
  username: string;
  service: any;

  constructor(private profileService: ProfileService) {
   }
   getProfile() {
    this.service.getUsername(this.username);

    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    console.log(this.repo);
  }
  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
    this.service.getUsers();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    const options = {
      strings: ['Enter your username please.'],
      
 };
  }

}