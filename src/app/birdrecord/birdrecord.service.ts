import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";


import { BirdRecord } from './birdrecord';

@Injectable()
export class BirdRecordService {
    private API_URL = 'http://localhost:8080/netfugl';  // URL to web api

    constructor(private http: Http) { }

    getDKList(code): Observable<BirdRecord[]> {
        return this.http
            .get(this.API_URL + "/dkchecklist?profile_id=" + code)
            .pipe(map(response => {
                const all = response.json();
                return all.map((p) => new BirdRecord(p));
              }));
    }

    filterList(list1,list2): Array<BirdRecord> {
        var filtered : Array<BirdRecord> = list1.filter(function(e){
            var notInList = true;
            for(var i=0;i<list2.length;i++){
                if(e.species_id == list2[i].species_id) {
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
