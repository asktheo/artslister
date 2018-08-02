import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";


import { Profile } from './Profile';

@Injectable()
export class ProfileService {
    private API_URL = 'http://localhost:8080/netfugl';  // URL to web api
    private profiles : Profile[] = null;

    constructor(private http: Http) { }


    getProfiles(): Observable<Profile[]> {
        return this.http
          .get(this.API_URL + '/profiles')
          .pipe(map(response => {
            const all = response.json();
            return all.map((p) => new Profile(p));
          }));
          //.catch(this.handleError);
      }

    
      getProfile(id): Profile {
        return this.profiles.find(user => user.profileId === id);
      }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
