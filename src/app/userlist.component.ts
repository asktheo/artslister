import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './userlist.user';
import { UserListService } from './userlist.service';

@Component({
  selector: 'userlists',
  templateUrl: './userlist.component.html',
  styleUrls: ['/userlist.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser: User = null;
  users: User[];
  error: any;

  constructor(
    private router: Router,
    private service: UserListService) { }

  getUser(user): void {
    this.service
      .getUser(user.id)
      .then(user => this.selectedUser = user)
      .catch(error => this.error = error);
      
  }

  getUsers(): void {
    this.service
      .getUsers()
      .then(records => this.users = records)
      .catch(error => this.error = error);
  }  

  ngOnInit(): void {
    this.getUsers()
  }

}
