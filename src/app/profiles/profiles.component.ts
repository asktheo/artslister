import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profiles.service';
import { Profile } from './Profile';
import { Router } from '@angular/router';
import { BirdRecord } from '../birdrecord/birdrecordtype';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  private profile1: Profile;
  private profile2: Profile;
  private sel1: string;
  private sel2: string;
  public profiles: Profile[] = [];
  private compareList: BirdRecord[] = [];

  constructor(
    private router: Router,
    private service: ProfileService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  setUser1(event : Event): void {
    var p : Profile = this.service.findProfile(this.sel1);
    this.profile1 = p;
  }

  setUser2(event : Event): void {
    var p : Profile = this.service.findProfile(this.sel2);
    this.profile2 = p;
  }

  setRecords(p : Profile, recs: Array<BirdRecord>){
    p.birdRecords = recs;
  }

  getUsers(): void {
    if(this.service.getProfiles().length == 0) {
      this.service.getProfilesFromAPI().subscribe(
        (profiles) => {
          profiles.map(p => p.searchName = (p.firstName + " " + p.lastName));
          this.profiles = profiles;
          this.service.setProfiles(profiles);
        }
      );

    }
    else {
      this.profiles = this.service.getProfiles();
    }
  }

  compare($event): void {
    this.compareList = this.service.filterList(this.profile1.birdRecords,this.profile2.birdRecords);
  }


}
