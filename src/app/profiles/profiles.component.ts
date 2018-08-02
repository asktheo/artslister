import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profiles.service';
import { Profile } from './Profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  private profile: Profile;
  private profiles: Profile[] = [];
  private error: any;

  constructor(
    private router: Router,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUser(user): void {
    this.profile = this.service
      .getProfile(user.id);

  }

  getUsers(): void {
    this.service.getProfiles().subscribe(
      (profiles) => {
        this.profiles = profiles;
      }
    );
  }


}
