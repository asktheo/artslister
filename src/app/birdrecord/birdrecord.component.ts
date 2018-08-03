import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BirdRecordService } from './birdrecord.service';
import { BirdRecord } from './birdrecord';

@Component({
  selector: 'app-birdrecord',
  templateUrl: './birdrecord.component.html',
  styleUrls: ['./birdrecord.component.css']
})
export class BirdRecordComponent implements OnInit {
  birdRecords: BirdRecord[];
  compareRecords: BirdRecord[];
  filteredRecords: BirdRecord[];
  total: number = 0;
  navigated = false; // true if navigated here
  selectedName : string;
  selectedToCompare : string;

  constructor(
    private service: BirdRecordService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //   if (params['code'] !== undefined) {
    //     const code = params['code'];
    //     this.selectedName = code;
    //     this.navigated = true;
    //     this.service
    //       .getDKList(code)
    //       .subscribe(recs => this.birdRecords = recs);
    //   } else {
    //         this.navigated = false;
    //   }
    // });
  }

loadDK(code) : void {
  this.service.getDKList(code)
  .subscribe(recs => this.birdRecords = recs);
}


  getCompareDKList(code) : void {
    this.selectedToCompare = code;
    this.service.getDKList(code)
          .subscribe(recs => {
            this.compareRecords = recs;
            this.filteredRecords = this.service.filterList(this.birdRecords,this.compareRecords);
          });
  }

}
