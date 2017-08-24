import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './userlist.user';


@Injectable()
export class UserListService {
  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<Array<User>> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as User[];
      })
      .catch(this.handleError);
  }

  getUser(id): Promise<User> {
    return this.getUsers()
      .then(list => list.find(user => user.id === id));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
