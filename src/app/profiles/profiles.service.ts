import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";

import { BirdRecord} from '../birdrecord/birdrecordtype';
import { Profile } from './Profile';
import { environment } from 'environments/environment';

//set the url for the service
const API_URL = environment.apiUrl;

@Injectable()
export class ProfileService {
    private profiles : Profile[] = [];

    constructor(private http: Http) { 

    }

    getProfilesFromAPI(): Observable<Profile[]> {
        return this.http
          .get(API_URL + '/profiles')
          .pipe(map(response => {
            const all = response.json();
            return all.map((p) => new Profile(p));
          }));
      }

      getProfiles(): Profile[] {
        return this.profiles;
      }

      setProfiles(profiles: Profile[]) {
        this.profiles = profiles;
      }

      findProfile(s : string): Profile {
        return this.profiles.find(user => user.searchName === s);
      }

      getProfile(id : number): Profile {
        return this.profiles.find(user => user.profileId === id);
      }

      filterList(list1,list2): Array<BirdRecord> {
        let filtered : Array<BirdRecord> = list1.filter(function(e){
            let notInList : boolean = true;
            for(var i=0;i<list2.length;i++){
                if(e.speciesId == list2[i].speciesId) {
                    notInList = false;
                    break;
                };
            }
            return notInList;
        });
        return filtered;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
