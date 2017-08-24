import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BirdRecordService } from './birdrecord.service';
import { BirdRecord } from './birdrecord';

import { UserListService } from '../userlist.service';
import { User } from '../userlist.user';

@Component({
  selector: 'app-birdrecord',
  templateUrl: './birdrecord.component.html',
  styleUrls: ['./birdrecord.component.css']
})
export class BirdRecordComponent implements OnInit {
  users: User[];
  birdRecords: BirdRecord[];
  compareRecords: BirdRecord[];
  filteredRecords: BirdRecord[];
  total: number = 0;
  navigated = false; // true if navigated here
  error: any;
  selectedName : string;
  selectedToCompare : string;

  constructor(
    private service: BirdRecordService,
    private userlistService: UserListService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['code'] !== undefined) {
        const code = params['code'];
        this.selectedName = code;
        this.navigated = true;
        this.service
          .getDKList(code)
          .then(recs => this.birdRecords = recs)
          .catch(error => this.error = error);
          this.getUsers();
      } else {
            this.navigated = false;
      }
    });
  }

  getCompareDKList(code) : void {
    this.selectedToCompare = code;
    this.service.getDKList(code)
          .then(recs => this.compareRecords = recs)
          .then(recs => this.filteredRecords = this.service.filterList(this.birdRecords,this.compareRecords))
          .catch(error => this.error = error);
  }

  getUsers(): void {
    this.userlistService
      .getUsers()
      .then(records => this.users = records)
      .catch(error => this.error = error);
  }   

}
