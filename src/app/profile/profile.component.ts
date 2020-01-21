// import { Component, OnInit } from '@angular/core';
// import{ ProfileService} from 'src/app/service/profile.service';
// import { Users } from '../users';
// import { Repository } from '../repository';




// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })


// export class ProfileComponent implements OnInit {
//   searchUsers = true;

//   user:any;
//   repo: any;
//   username: any;
//   service: any;

//   constructor(private profileService: ProfileService) {
//    }
//    getProfile() {
//     this.service.getUsername(this.username);

//     this.service.getUser();
//     this.user = this.service.user;

//     this.service.getRepos(this.username);
//     this.repo = this.service.repo;
//     console.log(this.repo);
//   }
//   switchSearch() {
//     this.searchUsers = !this.searchUsers;
//   }

//   ngOnInit() {
//     this.service.getUsers();
//     this.user = this.service.user;

//     this.service.getRepos(this.username);
//     this.repo = this.service.repo;
//     const options = {
//       strings: ['Enter your username please.'],
      
//  };
//   }

// }
import { Component, OnInit } from "@angular/core";
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;
  username: any;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.profileService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }
  search() {
    this.profileService.updateUsername(this.username);

    this.profileService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.profileService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

  ngOnInit() {}
}