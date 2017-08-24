import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BirdRecord } from './birdrecord';

@Injectable()
export class BirdRecordService {
    private url = '/assets/';  // URL to web api

    constructor(private http: Http) { }

    getDKList(code): Promise<Array<BirdRecord>> {
        return this.http
            .get(this.url + code + "_dklist.json")
            .toPromise()
            .then((response) => {
                return response.json() as BirdRecord[];
            })
            .catch(this.handleError);
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
