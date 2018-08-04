import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";


import { BirdRecord } from './birdrecordtype';
import { environment } from 'environments/environment';

//set the url for the service
const API_URL = environment.apiUrl;

@Injectable()
export class BirdRecordService {
      // URL to web api

    constructor(private http: Http) { }

    getList(params): Observable<BirdRecord[]> {
        console.log("type loading: ",params.list)
        let url = API_URL + (params.list == "WP" ? "/wp" : "/dk") + "checklist?profile_id=";
        return this.http
            .get(url + params.id)
            .pipe(map(response => {
                const all = response.json();
                return all.map((p) => new BirdRecord(p));
        }));
    }
}
