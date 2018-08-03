import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";


import { Profile } from './Profile';
import { environment } from 'environments/environment';

//set the url for the service
const API_URL = environment.apiUrl;

@Injectable()
export class ProfileService {
    private profiles : Profile[] = [];

    constructor(private http: Http) { 
      this.getProfilesFromAPI().subscribe(
        (profiles) => {
          this.profiles = profiles;
          this.profiles.map(p => p.searchName = (p.firstName + " " + p.lastName));
        }
      );
    }


    getProfilesFromAPI(): Observable<Profile[]> {
        return this.http
          .get(API_URL + '/profiles')
          .pipe(map(response => {
            const all = response.json();
            return all.map((p) => new Profile(p));
          }));
          //.catch(this.handleError);
      }

      getProfiles(): Profile[] {

        return this.profiles;
      }


      findProfile(s : string): Profile {
        return this.profiles.find(user => user.searchName === s);
      }

      getProfile(id : number): Profile {
        return this.profiles.find(user => user.profileId === id);
      }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
