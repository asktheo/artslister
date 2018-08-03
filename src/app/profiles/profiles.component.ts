import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profiles.service';
import { Profile } from './Profile';
import { Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  private profile1: Profile;
  private profile2: Profile;
  private customSelected: string;
  private profiles: Profile[] = [];

  private error: any;

  constructor(
    private router: Router,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  setUser(event : Event): void {

    var p : Profile = this.service.findProfile(this.customSelected);
    (!this.profile1)? this.profile1 = p: this.profile2 = p;

    console.log("profile 1", this.profile1);
    console.log("profile 2", this.profile2)
  }

  // getUser1(user): void {
  //   this.profile1 = this.service
  //     .getProfile(user.id);
  // }

  // getUser2(user): void {
  //   this.profile2 = this.service
  //     .getProfile(user.id);
  // }

  getUsers(): void {
    if(this.service.getProfiles().length == 0) {
      this.service.getProfilesFromAPI().subscribe(
        (profiles) => {
          profiles.map(p => p.searchName = (p.firstName + " " + p.lastName));
          this.profiles = profiles;
        }
      );

    }
    else {
      this.profiles = this.service.getProfiles();
    }

  }


}
